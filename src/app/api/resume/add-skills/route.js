import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeId, skills } = body;

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

    // Update skills field
    existResume.skills = skills ?? existResume.skills;
    await existResume.save();

    return NextResponse.json(
      {
        message: "Skills updated successfully",
        success: true,
        data: existResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating skills:", error);
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
