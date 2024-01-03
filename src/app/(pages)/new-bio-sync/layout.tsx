import { type Metadata } from "next"

import type { ILayout } from "types";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BioSync, create a new one !",
  }
}


export default function NewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}