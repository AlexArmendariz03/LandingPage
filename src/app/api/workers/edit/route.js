import db from "@/lib/db";
import {NextResponse} from "next/server";

export  async function PUT(req) {
  try {
    const body = await req.json()
    if (body.data.email) delete body.data.email
    const updatedWorker = await db.worker.update({
      where: {
        id: body.id
      },
      data: body.data
    });
    return NextResponse.json(updatedWorker);
  } catch (error) {
    console.error("Error al actualizar el trabajador:", error);
  }
}


