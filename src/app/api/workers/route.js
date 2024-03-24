import db from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    const newWorker = await db.worker.findMany()
    return NextResponse.json(newWorker);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

