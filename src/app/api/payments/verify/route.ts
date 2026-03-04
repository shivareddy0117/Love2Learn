import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// POST - Verify Razorpay payment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentId } = body;

    // Verify signature if Razorpay is configured
    if (process.env.RAZORPAY_KEY_SECRET && razorpay_order_id && razorpay_payment_id && razorpay_signature) {
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign)
        .digest("hex");

      if (razorpay_signature !== expectedSign) {
        return NextResponse.json(
          { error: "Payment verification failed" },
          { status: 400 }
        );
      }
    }

    // Update payment record
    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: "completed",
        razorpayId: razorpay_payment_id || `manual_${Date.now()}`,
        paidAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      payment,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
