import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST - Create new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { childName, childAge, parentName, email, phone, program, message } = body;

    // Validate required fields
    if (!childName || !childAge || !parentName || !email || !phone || !program) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        childName,
        childAge,
        parentName,
        email,
        phone,
        program,
        message: message || "",
      },
    });

    return NextResponse.json(
      { success: true, inquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

// GET - List all inquiries (for admin)
export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ inquiries });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
