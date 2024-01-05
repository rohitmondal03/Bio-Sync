import { type Metadata } from "next"

import type { ILayout } from "types";
import { NewBioSyncPageMetadata } from "@/lib/config/metadata.config";


export const metadata: Metadata= NewBioSyncPageMetadata;


export default function NewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}