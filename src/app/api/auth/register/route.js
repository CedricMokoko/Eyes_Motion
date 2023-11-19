import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, surname, email, password } = body;

  if (!name || !surname || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  //Controllo che l'email sia unico nel DB.
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExist) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  //E ora mandiamo il nostro oggetto nel data base
  const user = await prisma.user.create({
    data: {
      name,
      surname,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
