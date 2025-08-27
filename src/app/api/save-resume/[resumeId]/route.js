import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";
export async function POST(req, { params }) {
  try {
    await connectDB();

    const {data} = await req.json();

    console.log({...data})
    const {resumeId} =await params

    const updatedResume = await Resume.findByIdAndUpdate(
      resumeId,
      { $set: { ...data } },
      { new: true }
    );

    if (!updatedResume) {
      return NextResponse.json(
        {
          message: "Resume Not found",
          success: false,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Resume Updated Successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error !!",
        success: false,
      },
      { status: 500 }
    );
  }
}
