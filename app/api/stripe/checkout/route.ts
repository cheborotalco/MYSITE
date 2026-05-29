import { NextResponse } from "next/server";
import Stripe from "stripe";
import { findServiceById } from "@/lib/services";
import { stripeSchema } from "@/lib/validation";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(request: Request) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Stripe key is not configured yet" }, { status: 503 });
    }

    const body = await request.json();
    const parsed = stripeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Validation error", details: parsed.error.flatten() }, { status: 400 });
    }

    const service = findServiceById(parsed.data.serviceId);
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const stripe = new Stripe(stripeSecretKey);
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: service.title,
              description: service.description,
            },
            unit_amount: service.amountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/${parsed.data.locale}/services?payment=success`,
      cancel_url: `${baseUrl}/${parsed.data.locale}/services?payment=cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("stripe_checkout_error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
