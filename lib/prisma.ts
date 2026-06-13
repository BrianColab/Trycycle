import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    // Warn but don't throw — throwing here crashes Next.js during build
    // because module-level code runs when the bundle is evaluated.
    // The actual connection error will surface at query time (runtime only).
    console.warn(
      "[prisma] DATABASE_URL is not set. Database queries will fail at runtime."
    );
  }
  const adapter = new PrismaPg({ connectionString: connectionString ?? "" });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
