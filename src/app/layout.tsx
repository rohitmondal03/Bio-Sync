import { type Metadata } from "next";

import { AuthProvider } from "@/components/shared/AuthProvider";
import { ThemeProvider } from "@/components/themes/ThemeWrapper";
import Navbar from "@/components/shared/Navbar";
import { inter } from "@/lib/fonts";
import "@/styles/globals.css"


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
