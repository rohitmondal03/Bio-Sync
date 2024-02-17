import type { ILayout } from "types";
import { ViewBioSyncMetadata } from "@/lib/config/metadata.config";


export const metadata= ViewBioSyncMetadata;


export default function ViewBioSyncLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}
