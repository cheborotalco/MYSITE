import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "date query param is required" }, { status: 400 });
  }

  const bookings = await prisma.booking.findMany({
    where: { date },
    select: { time: true },
  });

  return NextResponse.json({ unavailableSlots: bookings.map((booking) => booking.time) });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Validation error", details: parsed.error.flatten() }, { status: 400 });
    }

    const existing = await prisma.booking.findFirst({
      where: {
        date: parsed.data.date,
        time: parsed.data.time,
      },
    });

    if (existing) {
      return NextResponse.json({ error: "Slot already booked" }, { status: 409 });
    }

    const booking = await prisma.booking.create({
      data: {
        ...parsed.data,
        status: "PENDING",
      },
    });

    return NextResponse.json({ success: true, id: booking.id }, { status: 201 });
  } catch (error) {
    console.error("booking_error", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
