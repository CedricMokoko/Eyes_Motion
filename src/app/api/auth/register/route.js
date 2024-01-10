// import prisma from "@/utils/prisma";
// import * as bcrypt from "bcrypt";
// import { NextResponse } from "next/server";

// function isValidEmail(email) {
//   // Regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function isValidPassword(password) {
//   // Regex, lungo almeno 8 caretteri almeno una maiuscula, almeno una minuscola ed almeno una ciffra
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//   return passwordRegex.test(password);
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, surname, email, password, confirmPassword } = body;

//     if (!name || !surname || !email || !password || !confirmPassword) {
//       return new NextResponse("Missing Fields", { status: 400 });
//     }
//     // Validation e-mail regex
//     if (!isValidEmail(email)) {
//       return new NextResponse("Invalid Email Format", { status: 400 });
//     }
//     // Validation password regex
//     if (!isValidPassword(password)) {
//       return new NextResponse(
//         "Invalid Password Format. It must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.",
//         { status: 400 }
//       );
//     }
//     // Si verifica che le password coincidano
//     if (password !== confirmPassword) {
//       return new NextResponse("Passwords do not match", { status: 400 });
//     }
//     // Si controlla se l'email digitata nel form register esiste digià nel DB
//     const userExist = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });
//     if (userExist) {
//       return new NextResponse("Email already exists", { status: 400 });
//     }
//     // Creazione dello new user nel DB
//     const user = await prisma.user.create({
//       data: {
//         name,
//         surname,
//         email,
//         password: await bcrypt.hash(body.password, 10),
//       },
//     });
//     // Risposta di successo
//     return new NextResponse("Registration successful", {
//       status: 201,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//   } catch (error) {
//     return new NextResponse("Error during registration", { status: 500 });
//   }
// }

// import prisma from "@/utils/prisma";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

function isValidEmail(email) {
  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Regex, lungo almeno 8 caretteri almeno una maiuscula, almeno una minuscola ed almeno una ciffra
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, surname, email, password, confirmPassword } = body;
    console.log(body);
    if (!name || !surname || !email || !password || !confirmPassword) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    // Validation e-mail regex
    if (!isValidEmail(email)) {
      return new NextResponse("Invalid Email Format", { status: 400 });
    }
    // Validation password regex
    if (!isValidPassword(password)) {
      return new NextResponse(
        "Invalid Password Format. It must have at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.",
        { status: 400 }
      );
    }
    // Si verifica che le password coincidano
    if (password !== confirmPassword) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }
    // // Si controlla se l'email digitata nel form register esiste digià nel DB
    // const userExist = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });
    // if (userExist) {
    //   return new NextResponse("Email already exists", { status: 400 });
    // }
    // // Creazione dello new user nel DB
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     surname,
    //     email,
    //     password: await bcrypt.hash(body.password, 10),
    //   },
    // });

    //Hash della password recevuta dal form di registrazione
    const hashedPassword = await hash(body.password, 10);

    //Salvo il tutto sul database postgree di vercel
    const response = await sql`
    INSERT INTO user (name, surname, email, password)
    VALUES (${body.name},${body.surname},${body.email}, ${hashedPassword})`;
  } catch (error) {
    return new NextResponse("Error during registration", { status: 500 });
  }
  return new NextResponse("Registration successful", { status: 201 });
}
