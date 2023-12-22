import { type Metadata } from "next";

import ContextProvider from "@/components/shared/ContextProvider";
import { AuthProvider } from "@/components/shared/AuthProvider";
import Navbar from "@/components/layout/Navbar";
import { inter } from "@/lib/fonts";
import type { ILayout } from "types"
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
          <Navbar />
          <ContextProvider>
            <main>{children}</main>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
