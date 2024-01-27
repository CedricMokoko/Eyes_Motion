import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { cormorant_Garamond, caveat } from "@/fonts";
import AuthProvider from "@/context/AuthProvider";
import ToasterContext from "@/context/ToasterContext";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav/MobileNav";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "Eyes_Motion",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="it">
      <body className={`${cormorant_Garamond.variable} ${caveat.variable}`}>
        <AuthProvider>
          <ToasterContext />
          <Header session={session} />
          <main session={session}>{children}</main>
          <MobileNav session={session} />
        </AuthProvider>
      </body>
    </html>
  );
}
