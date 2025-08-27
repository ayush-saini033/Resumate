import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeId, education } = body;

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

    // Update education array
    existResume.education = education ?? existResume.education;

    await existResume.save();

    return NextResponse.json(
      {
        message: "Educations updated successfully",
        success: true,
        data: existResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating education:", error);
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
