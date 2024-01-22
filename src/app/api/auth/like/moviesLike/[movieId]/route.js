import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, { params: { movieId } }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: token.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Utente non trovato" },
      { status: 404 }
    );
  }

  try {
    const existingLike = await prisma.movieLike.findFirst({
      where: {
        userId: user.id,
        movieId,
      },
    });

    if (existingLike) {
      // Se esiste già un "like", cancellalo
      await prisma.movieLike.delete({
        where: {
          id: existingLike.id,
        },
      });

      return NextResponse.json(
        { message: "Il film è stato rimosso dai tuoi preferiti" },
        { status: 200 }
      );
    } else {
      // Se non esiste un "like", crea un nuovo "like"
      await prisma.movieLike.create({
        data: {
          userId: user.id,
          movieId,
          isLiked: true,
        },
      });

      return NextResponse.json(
        { message: "Il film è stato aggiunto ai tuoi preferiti" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Errore durante l'aggiunta/rimozione del like:", error);
    return NextResponse.json(
      { message: "Errore interno del server" },
      { status: 500 }
    );
  }
}
