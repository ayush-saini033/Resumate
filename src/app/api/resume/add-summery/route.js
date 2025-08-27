import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { resumeId, summery } = body;

    const resumeExist = await Resume.findById(resumeId);
    if (!resumeExist) {
      return NextResponse.json(
        {
          message: "Resume not found",
          success: false,
        },
        { status: 404 }
      );
    }

    resumeExist.summery = summery;
    await resumeExist.save();

    return NextResponse.json({
      message: "Resume updated successfully",
      success: true,
      data: resumeExist,
    });
  } catch (error) {
    console.log(error);
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
