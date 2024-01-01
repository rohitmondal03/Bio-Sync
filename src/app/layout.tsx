import { type Metadata } from "next";

import type { ILayout } from "types"
import { code } from "@/lib/fonts";
import ContextProvider from "@/components/providers/ContextProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import LargeScreenNavbar from "@/components/layout/navbar";
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: "BioSync || Your single link Portfolio"
}


export default function RootLayout(
  { children }: ILayout
) {
  return (
    <html lang="en">
      <body className={`${code.className}`}>
        <AuthProvider>
          <LargeScreenNavbar />
          <ContextProvider>
            <>{children}</>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
