import { PrismaClient } from "@prisma/client";

let prisma = null;

if (process.env.DATABASE_URL) {
  prisma = global.prisma || new PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
  }
} else {
  console.warn("DATABASE_URL no configurada; Prisma no fue inicializado.");
}

export async function ensureDbConnection() {
  if (!prisma) {
    return { ok: false, message: "DATABASE_URL no configurada" };
  }

  try {
    await prisma.$connect();
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
}

export default prisma;
