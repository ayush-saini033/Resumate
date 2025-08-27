import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeId, firstName, lastName, jobTitle, address, phone, email } =
      body;

    const existResume = await Resume.findById(resumeId);

    if (!existResume) {
      return NextResponse.json(
        {
          message: "Resume not found",
          success: false,
        },
        { status: 404 }
      );
    }

    // Update only the fields provided (optional: you can validate input before this)
    existResume.firstName = firstName ?? existResume.firstName;
    existResume.lastName = lastName ?? existResume.lastName;
    existResume.jobTitle = jobTitle ?? existResume.jobTitle;
    existResume.address = address ?? existResume.address;
    existResume.phone = phone ?? existResume.phone;
    existResume.email = email ?? existResume.email;

    await existResume.save();

    return NextResponse.json(
      {
        message: "Resume updated successfully",
        success: true,
        data: existResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating resume:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
