import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/components/shared/AuthProvider";
import { ThemeProvider } from "@/components/themes/ThemeWrapper";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout(
  { children }: ILayout
) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
