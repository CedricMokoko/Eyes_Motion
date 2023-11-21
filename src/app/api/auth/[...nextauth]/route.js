import NextAuth from "next-auth/next";
import prisma from "@/utils/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import * as bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "Eyes Motion",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "sed@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      /*In questa funzione vado a validare ho meno i formulario di login*/
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

        if (!user || !user?.password) {
          throw new Error("Incorrect email and/or password");
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
