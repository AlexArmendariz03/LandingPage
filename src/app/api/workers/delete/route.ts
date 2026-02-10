import db, { ensureDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

type WorkerDeleteRequest = { id: number | string };

export async function DELETE(req: Request) {
  const { id } = (await req.json()) as WorkerDeleteRequest;

  const connection = await ensureDbConnection();

  if (!connection.ok || !db) {
    console.error("No se pudo conectar a la base de datos", connection.ok ? "db no inicializada" : connection.message);
    return NextResponse.json({ message: "Servicio de datos no disponible" }, { status: 503 });
  }

  try {
    await db.worker.delete({
      where: {
        id: Number.parseInt(String(id), 10),
      },
    });
    return new Response();
  } catch (error) {
    console.error("Error al eliminar el trabajador:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
