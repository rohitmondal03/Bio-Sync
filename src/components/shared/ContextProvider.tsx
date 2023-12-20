"use client"

import { DataProvider } from "@/lib/context/user-bio-context"

export default function ContextProvider({ children }: ILayout) {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}
