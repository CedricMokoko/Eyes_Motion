import NextAuth from "next-auth/next";
import prisma from "@/utils/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Eyes Motion",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "sed" },
        email: { label: "Email", type: "text", placeholder: "sed@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      /* E' qui dentro a questa function che si gestisce il form di login cioè
       controlliamo se l'email e la password son bien present dans notre DB*/
      async authorize(credentials) {
        //Controllo che i campi non siano vuoti

        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        //Controllo se l'utente esiste nel mio DB
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        /* user?.hashedPassword serve in caso di login con Google o GitHub in cui
        la user?.hashedPassword non è indispensabile*/
        if (!user || !user?.password) {
          throw new Error("No user found");
        }

        // Ora controllo se la password coincide con l'email
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        //Se non coincidono
        if (!passwordMatch) {
          throw new Error("Incorrect email and/or password");
        }

        //Se tutto va bene
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
