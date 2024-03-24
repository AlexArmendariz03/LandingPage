import db from "@/lib/db";
import {NextResponse} from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const newWorker = await db.worker.create({
      data
    });
    return NextResponse.json(newWorker);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

