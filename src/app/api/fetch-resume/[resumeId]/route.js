import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { resumeId } = await params;

    const data = await Resume.findById(resumeId).select(
      "-title -user -createdAt -updatedAt -__v -_id"
    );

    if (!data) {
      return NextResponse.json(
        {
          message: "Resume not found",
          success: false,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Resume fetched successfully",
        success: true,
        resume: data
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
