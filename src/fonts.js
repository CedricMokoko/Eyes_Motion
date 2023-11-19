import { Cormorant_Garamond, Caveat } from "next/font/google"; //*

export const cormorant_Garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-caveat",
});
