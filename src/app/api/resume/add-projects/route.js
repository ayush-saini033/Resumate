import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeId, projects } = body;

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

    existResume.projects = projects ?? existResume.projects;
    await existResume.save();

    return NextResponse.json(
      {
        message: "Projects updated successfully",
        success: true,
        data: existResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating projects:", error);
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
