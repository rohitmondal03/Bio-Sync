import { type Metadata } from "next";

import type { ILayout } from "types"
import ContextProvider from "@/components/shared/ContextProvider";
import { AuthProvider } from "@/components/shared/AuthProvider";
import LargeScreenNavbar from "@/components/layout/large-screen-navbar";
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: "BioSync"
}


export default function RootLayout(
  { children }: ILayout
) {
  return (
    <html lang="en">
      <body className={`font-serif`}>
        <AuthProvider>
          <LargeScreenNavbar />
          <ContextProvider>
            <main>{children}</main>
          </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
