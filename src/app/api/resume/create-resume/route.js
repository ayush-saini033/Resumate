import { connectDB } from "@/lib/connectDB";
import User from "@/models/user.model";
import Resume from "@/models/resume.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json(); 
    const { userId, title } = body;


    const existUser = await User.findById(userId);
    if (!existUser) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 404 }
      );
    }

    if (existUser.credits === 0) {
      return NextResponse.json(
        {
          message: "You do not have credits",
          success: false,
        },
        { status: 402 }
      );
    }

    const newResume = await Resume.create({
      user: userId,
      title,
    });

    existUser.credits -= 1;
    await existUser.save();

    return NextResponse.json(
      {
        message: "Resume created successfully",
        resumeId: newResume._id,
        remainingCredits: existUser.credits,
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      { status: 500 }
    );
  }
}
