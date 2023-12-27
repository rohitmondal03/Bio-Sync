"use client"

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";


interface TProps  {
  children: ReactNode
}

export function AuthProvider({ children }: TProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}