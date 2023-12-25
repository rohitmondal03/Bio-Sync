import { type Metadata } from "next";

import type { ILayout } from "types";


export const metadata:Metadata= {
  title: "View BioSync"
}


export default function ViewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <>
      {children}
    </>
  )
}
