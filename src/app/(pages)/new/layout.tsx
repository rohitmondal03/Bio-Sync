import type { ILayout } from "types";
import { NewBioSyncPageMetadata } from "@/lib/config/metadata.config";


export const metadata= NewBioSyncPageMetadata;


export default function NewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}