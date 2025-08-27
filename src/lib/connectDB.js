import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(
      "mongodb+srv://ayushjslab:23bce033@cluster0.lxinmfc.mongodb.net/"
    );
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
