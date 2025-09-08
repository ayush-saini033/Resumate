import { connectDB } from "@/lib/connectDB";
import Resume from "@/models/resume.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { resumeId } = await params;

    // ✅ Find resume first (to get user)
    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return NextResponse.json(
        { message: "Resume not found", success: false },
        { status: 404 }
      );
    }

    await Resume.deleteOne({ _id: resumeId });

    await User.findByIdAndUpdate(resume.user, { $inc: { credits: 1 } });

    return NextResponse.json(
      {
        message: "Resume Deleted Successfully, 1 credit restored",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("DELETE /resume error:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
