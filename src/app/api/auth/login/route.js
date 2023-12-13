import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  // Trova l'utente nel database in base all'email fornita
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });
  //Se l'utente non esiste o la password non corrisponde, restituisci un errore 401 Unauthorized
  if (!user || !(await bcrypt.compare(body.password, user.password))) {
    return new NextResponse("Incorrect email and/or password", {
      status: 400,
    });
  }
  // Se sia l'email che la password sono corrette, restituisci i dati dell'utente (escludendo la password)
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...rest } = user;
    return NextResponse.json(rest);
  }
  return NextResponse.json(null);
}
