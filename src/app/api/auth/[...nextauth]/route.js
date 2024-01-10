import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/utils/prisma";
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
        email: {},
        password: {},
      },
      /*In questa funzione vado a convalidare ho meno il formulario di login*/
      async authorize(credentials) {
        // Controllo che i campi non siano vuoti
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }
        try {
          // Cerca l'utente nel database in base all'email fornita nel form di login
          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.email,
            },
          });
          // Se l'utente non esiste o la password non corrisponde, lancia un errore
          if (
            !user ||
            !(await bcrypt.compare(credentials?.password, user.password))
          ) {
            throw new Error();
          }
          //Se l'utente esiste nel database, restituisce i dati dell'utente (escludendo la password)
          const { password, ...rest } = user;
          return rest;
        } catch (error) {
          throw new Error("Incorrect email and/or password");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  //In caso di uso di middleware,pages ci torna la notre pagina di login personnalizzata
  pages: {
    signIn: `/login`,
  },
  //--
  session: {
    strategy: "jwt",
    callbacks: {
      async jwt(token, user) {
        // Aggiungi l'id dell'utente al token
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session(session, token) {
        // Aggiungi l'id dell'utente alla sessione
        session.user.id = token.id;
        return session;
      },
    },
  },
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
