import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'], //mostra a query no log do servidor
})