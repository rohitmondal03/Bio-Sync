import { type Metadata } from "next";

import type { ILayout } from "types";


export const metadata: Metadata= {
  title: "BioSync..."
}


export default function ViewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}
