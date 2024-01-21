// import prisma from "@/utils/prisma";
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function POST(request, { params: { serieId } }) {
//   const token = await getToken({ req: request });
//   if (!token) {
//     return NextResponse.json({ message: "unauthorized" }, { status: 401 });
//   }
//   const user = await prisma.user.update({
//     where: {
//       email: token.email,
//     },
//     data: {
//       serieLikes: {
//         create: [{ serieId }],
//       },
//     },
//   });
//   return NextResponse.json(user);
// }

import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, { params: { serieId } }) {
  const token = await getToken({ req: request });
  if (!token) {
    return NextResponse.json({ message: "non autorizzato" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: token.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "utente non trovato" },
      { status: 404 }
    );
  }

  const existingLike = await prisma.serieLike.findFirst({
    where: {
      userId: user.id,
      serieId,
    },
  });

  if (existingLike) {
    // Se la serie è già stata aggiunta, cancellala
    const deletedLike = await prisma.serieLike.delete({
      where: {
        id: existingLike.id,
      },
    });

    return NextResponse.json(
      { message: "La serie è stata rimossa dal tuo elenco preferiti" },
      { status: 200 }
    );
  }

  // Se la serie non è stata aggiunta, aggiungila
  const updatedUser = await prisma.user.update({
    where: {
      email: token.email,
    },
    data: {
      serieLikes: {
        create: [{ serieId }],
      },
    },
  });

  return NextResponse.json(updatedUser);
}
