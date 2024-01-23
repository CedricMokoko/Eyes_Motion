import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, { params: { serieId } }) {
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

    const existingLike = await prisma.serieLike.findFirst({
      where: {
        userId: user.id,
        serieId,
      },
    });

    if (existingLike) {
      // If the series is already added, remove it
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

    // If the series is not added, add it with isLiked set to true
    const updatedUser = await prisma.user.update({
      where: {
        email: token.email,
      },
      data: {
        serieLikes: {
          create: [{ serieId, isLiked: true }],
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
