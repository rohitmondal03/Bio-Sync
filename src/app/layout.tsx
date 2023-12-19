import { type Metadata } from "next";

import ContextProvider from "@/components/shared/ContextProvider";
import { AuthProvider } from "@/components/shared/AuthProvider";
import { ThemeProvider } from "@/components/themes/ThemeWrapper";
import Navbar from "@/components/shared/Navbar";
import { inter } from "@/lib/fonts";
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: "BioSync"
}


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
            <ContextProvider>
              <main>{children}</main>
            </ContextProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
