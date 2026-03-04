import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST - Create new student
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      program,
      bloodGroup,
      allergies,
      medicalNotes,
      parentName,
      parentEmail,
      parentPhone,
      parentPhone2,
      address,
      emergencyName,
      emergencyPhone,
      emergencyRelation,
      authorizedPickup,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !dateOfBirth || !gender || !program || !parentName || !parentEmail || !parentPhone || !address) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        program,
        bloodGroup,
        allergies,
        medicalNotes,
        parentName,
        parentEmail,
        parentPhone,
        parentPhone2,
        address,
        emergencyName,
        emergencyPhone,
        emergencyRelation,
        authorizedPickup: authorizedPickup ? JSON.stringify(authorizedPickup) : null,
      },
    });

    return NextResponse.json({ success: true, student }, { status: 201 });
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}

// GET - List all students
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get("program");
    const status = searchParams.get("status") || "active";

    const where: Record<string, string> = { status };
    if (program) where.program = program;

    const students = await prisma.student.findMany({
      where,
      include: {
        payments: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ students });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
