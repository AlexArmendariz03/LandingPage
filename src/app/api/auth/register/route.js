import db, { ensureDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const connection = await ensureDbConnection();

  if (!connection.ok) {
    console.error(
      "No se pudo conectar a la base de datos",
      connection.error?.message || connection.message
    );
    return NextResponse.json(
      { message: "Servicio de datos no disponible" },
      { status: 503 }
    );
  }

  try {
    const data = await request.json();
    const newWorker = await db.worker.create({
      data,
    });
    return NextResponse.json(newWorker);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
