import {
  Inter,
  Montserrat_Alternates as Montserrat,
  Fira_Code as CodeFont
} from "next/font/google";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const code = CodeFont({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})