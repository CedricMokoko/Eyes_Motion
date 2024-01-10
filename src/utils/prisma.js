import { PrismaClient } from "@prisma/client";
/**Code préso come tale dalla documentation prisma */
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
export default prisma;
/*  E donc per le chiamate al data base abbiamo:
  prisma.user.findMany
  prisma.user.findUnique
  prisma.create
  ecc...
 */

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function prismaExample() {
//   const newUser = await prisma.user.create({
//     data: {
//       name: "Elliott",
//       email: "xelliottx@example-user.com",
//     },
//   });

//   const users = await prisma.user.findMany();
// }
