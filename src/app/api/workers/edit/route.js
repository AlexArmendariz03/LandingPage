import db, { ensureDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req) {
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
    const body = await req.json();
    if (body.data.email) delete body.data.email;
    const updatedWorker = await db.worker.update({
      where: {
        id: body.id,
      },
      data: body.data,
    });
    return NextResponse.json(updatedWorker);
  } catch (error) {
    console.error("Error al actualizar el trabajador:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
