import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadMagnetSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadMagnetSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Validation error", details: parsed.error.flatten() }, { status: 400 });
    }

    const item = await prisma.leadMagnet.create({ data: parsed.data });

    return NextResponse.json(
      {
        success: true,
        id: item.id,
        downloadUrl: "/lead-magnet/ai-investment-checklist.pdf",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("lead_magnet_error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
