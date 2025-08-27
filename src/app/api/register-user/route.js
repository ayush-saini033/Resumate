import { connectDB } from "@/lib/connectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, profilePic } = await request.json();

    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json(
        { message: "User already exists with this email", success: false },
        { status: 409 }
      );
    }

    const newUser = await User.create({
      name,
      email,
      profilePic,
      credits: 3,
    });

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET, // use server-only secret
      { expiresIn: "2d" }
    );

    const response = NextResponse.json(
      {
        message: "User registered successfully",
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
        success: true,
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60, // 2 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Register Error:", error.message);
    return NextResponse.json(
      { message: "Failed to register user", success: false },
      { status: 500 }
    );
  }
}
