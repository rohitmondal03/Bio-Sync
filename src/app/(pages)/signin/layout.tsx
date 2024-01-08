import { type Metadata } from "next"

import type { ILayout } from "types"
import { SignInPageMetadata } from "@/lib/config/metadata.config";


export const metadata: Metadata = SignInPageMetadata;


export default function SignInLayout(
  { children }: ILayout
) {
  return (
    <>{children}</>
  )
}
