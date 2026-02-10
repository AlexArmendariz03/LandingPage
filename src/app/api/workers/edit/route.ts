import db, { ensureDbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

type WorkerUpdateRequest = {
  id: number;
  data: Record<string, unknown> & { email?: string };
};

export async function PUT(req: Request) {
  const connection = await ensureDbConnection();

  if (!connection.ok || !db) {
    console.error("No se pudo conectar a la base de datos", connection.ok ? "db no inicializada" : connection.message);
    return NextResponse.json({ message: "Servicio de datos no disponible" }, { status: 503 });
  }

  try {
    const body = (await req.json()) as WorkerUpdateRequest;

    if (body.data.email) {
      delete body.data.email;
    }

    const updatedWorker = await db.worker.update({
      where: { id: body.id },
      data: body.data,
    });

    return NextResponse.json(updatedWorker);
  } catch (error) {
    console.error("Error al actualizar el trabajador:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
