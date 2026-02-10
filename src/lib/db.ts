import { PrismaClient } from "@prisma/client";

type DbConnectionResult =
  | { ok: true }
  | { ok: false; message: string; error?: unknown };

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient | null = null;

if (process.env.DATABASE_URL) {
  prisma = global.prisma ?? new PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
  }
} else {
  console.warn("DATABASE_URL no configurada; Prisma no fue inicializado.");
}

export async function ensureDbConnection(): Promise<DbConnectionResult> {
  if (!prisma) {
    return { ok: false, message: "DATABASE_URL no configurada" };
  }

  try {
    await prisma.$connect();
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "No se pudo establecer la conexión", error };
  }
}

export default prisma;
