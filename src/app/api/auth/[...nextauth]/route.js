// // import NextAuth from "next-auth/next";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),

//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),

//     CredentialsProvider({
//       name: "Eyes Motion",
//       credentials: {
//         email: {},
//         password: {},
//       },
//       /*In questa funzione vado a convalidare ho meno il formulario di login*/
//       async authorize(credentials) {
//         // Controllo che i campi non siano vuoti
//         if (!credentials.email || !credentials.password) {
//           throw new Error("Please enter an email and password");
//         }
//         /*Mado i dati del formulario di login alla route de login che sarà
//         quella che andrà ad controllare nel database tramite prisma se l'utente esiste
//         o meno*/
//         try {
//           const response = await fetch(
//             `${process.env.NEXTAUTH_URL}/api/auth/login`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 email: credentials?.email,
//                 password: credentials?.password,
//               }),
//             }
//           );
//           /* Qui la risposta che ci ritorna poi dalla route di login dopo il controllo nel database */
//           if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message);
//           }
//           //Se tutto va bene ritorno lo user, ma solo l'email come spécificato nella route di login
//           const user = await response.json();
//           return user || null;
//         } catch (error) {
//           throw new Error("Incorrect email and/or password");
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     callbacks: {
//       async jwt(token, user) {
//         // Aggiungi l'id dell'utente al token
//         if (user) {
//           token.id = user.id;
//         }
//         return token;
//       },
//       async session(session, token) {
//         // Aggiungi l'id dell'utente alla sessione
//         session.user.id = token.id;
//         return session;
//       },
//     },
//   },
//   debug: process.env.NODE_ENV === "development",
// };
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

// import NextAuth from "next-auth/next";
import NextAuth from "next-auth";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  //In caso di uso di middleware, ci torna la notre pagina di login personnalizzata
  pages: {
    signIn: `/login`,
  },
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
        /*Mado i dati del formulario di login alla route de login che sarà
              quella che andrà ad controllare nel database tramite prisma se l'utente esiste
              o meno*/
        try {
          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );
          /* Qui la risposta che ci ritorna poi dalla route di login dopo il controllo nel database */
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          //Se tutto va bene ritorno lo user, ma solo l'email come spécificato nella route di login
          const user = await response.json();
          return user || null;
        } catch (error) {
          throw new Error("Incorrect email and/or password");
        }
      },

      // async authorize(credentials, req) {
      //   const response = await sql`
      //   SELECT * FROM users WHERE email=${credentials?.email}`;

      //   const user = response.rows[0];
      //   const passwordCorrect = await compare(
      //     credentials?.password,
      //     user.password
      //   );
      //   //Se l'utente non esiste o la password non corrisponde, restituisci un errore 401 Unauthorized
      //   if (!user || !passwordCorrect) {
      //     return new NextResponse("Incorrect email and/or password", {
      //       status: 400,
      //     });
      //   }

      //   // Se sia l'email che la password sono corrette, restituisci i dati dell'utente (escludendo la password)
      //   if (user && passwordCorrect) {
      //     const { password, ...rest } = user;
      //     return NextResponse.json(rest);
      //   }
      //   return NextResponse.json(null);
      // },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  //   callbacks: {
  //     async jwt(token, user) {
  //       // Aggiungi l'id dell'utente al token
  //       if (user) {
  //         token.id = user.id;
  //       }
  //       return token;
  //     },
  //     async session(session, token) {
  //       // Aggiungi l'id dell'utente alla sessione
  //       session.user.id = token.id;
  //       return session;
  //     },
  //   },
  // },
  // debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
