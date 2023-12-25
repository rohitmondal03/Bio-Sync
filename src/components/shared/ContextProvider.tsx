"use client"

import { DataProvider } from "@/lib/context/user-bio-context"
import type { ILayout } from "types"


export default function ContextProvider({ children }: ILayout) {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}
