import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, { params: { movieId } }) {
  const token = await getToken({ req: request });
  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
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

  const existingLike = await prisma.movieLike.findFirst({
    where: {
      userId: user.id,
      movieId,
    },
  });

  if (existingLike) {
    // Se la serie è già stata aggiunta, cancellala
    const deletedLike = await prisma.movieieLike.delete({
      where: {
        id: existingLike.id,
      },
    });

    return NextResponse.json(
      { message: "il movie è stata rimossa dal tuo elenco preferiti" },
      { status: 200 }
    );
  }

  // Se la serie non è stata aggiunta, aggiungila
  const updatedUser = await prisma.user.update({
    where: {
      email: token.email,
    },
    data: {
      movieLikes: {
        create: [{ movieId }],
      },
    },
  });

  return NextResponse.json(updatedUser);
}
