import db from "@/lib/db";
import {NextResponse} from "next/server";

export  async function DELETE(req) {
  const { id } = await req.json();

  try {
    await db.worker.delete({
      where: {
        id: parseInt(id)
      }
    });
    return new Response()
  } catch (error) {
    console.error('Error al eliminar el trabajador:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}