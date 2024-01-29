import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, { params: { movieId } }) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.json({ message: "Non autorizzato" }, { status: 401 });
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

    const existingLike = await prisma.movieLike.findFirst({
      where: {
        userId: user.id,
        movieId,
      },
    });

    if (existingLike) {
      // If the movie is already liked, remove the like
      const deletedLike = await prisma.movieLike.delete({
        where: {
          id: existingLike.id,
        },
      });

      return NextResponse.json(
        { message: "Il film è stato rimosso dai tuoi preferiti" },
        { status: 200 }
      );
    }

    // If the movie is not liked, add the like with isLiked set to true
    const updatedUser = await prisma.user.update({
      where: {
        email: token.email,
      },
      data: {
        movieLikes: {
          create: [{ movieId, isLiked: true }],
        },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Errore durante l'elaborazione della richiesta" },
      { status: 500 }
    );
  }
}
