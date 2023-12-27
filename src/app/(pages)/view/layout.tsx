import { type Metadata } from "next";

import type { ILayout } from "types";


export const metadata:Metadata= {
  title: "BioSync || Profile"
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
