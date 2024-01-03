import { type Metadata } from "next";

import type { ILayout } from "types"
import { poppins } from "@/lib/fonts";
import ContextProvider from "@/components/providers/ContextProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: "BioSync, your single link Portfolio",
  metadataBase: new URL("https://biosync.vercel.app"),
  openGraph: {
    type: "website",
    title: "BioSync",
    description: "Your single link portfolio...",
    siteName: "BioSync",
  }
}


export default function RootLayout(
  { children }: ILayout
) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AuthProvider>
          <Navbar />
          <ContextProvider>
            <>{children}</>
          </ContextProvider>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
