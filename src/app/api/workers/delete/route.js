import db, { ensureDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { id } = await req.json();

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
    await db.worker.delete({
      where: {
        id: parseInt(id),
      },
    });
    return new Response();
  } catch (error) {
    console.error("Error al eliminar el trabajador:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
