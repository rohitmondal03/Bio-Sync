import { type Metadata } from "next";

import type { ILayout } from "types";
// import { ViewPageMetadata } from "@/lib/config/metadata.config";


// export const metadata: Metadata= ViewPageMetadata;


export default function ViewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}
