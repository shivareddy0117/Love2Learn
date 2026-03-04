import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST - Create a payment order (Razorpay)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentId, amount, feeType, month, description } = body;

    // Validate
    if (!studentId || !amount || !feeType) {
      return NextResponse.json(
        { error: "Student ID, amount, and fee type are required" },
        { status: 400 }
      );
    }

    // Verify student exists
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      return NextResponse.json(
        { error: "Student not found" },
        { status: 404 }
      );
    }

    // If Razorpay is configured, create a Razorpay order
    let razorpayOrder = null;
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
      try {
        const Razorpay = (await import("razorpay")).default;
        const razorpay = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        razorpayOrder = await razorpay.orders.create({
          amount: Math.round(amount * 100), // Razorpay expects amount in paise
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          notes: {
            studentId,
            feeType,
            month: month || "",
          },
        });
      } catch (razorpayError) {
        console.error("Razorpay error:", razorpayError);
        // Continue without Razorpay - will create payment record anyway
      }
    }

    // Create payment record in database
    const payment = await prisma.payment.create({
      data: {
        studentId,
        amount,
        feeType,
        month,
        description,
        paymentMethod: "online",
        razorpayOrderId: razorpayOrder?.id || null,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      payment,
      razorpayOrder,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || null,
    });
  } catch (error) {
    console.error("Error creating payment order:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
