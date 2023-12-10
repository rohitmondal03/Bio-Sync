import { type Metadata } from "next"

export const metadata: Metadata= {
  title: "Dashboard",
  description: "T3- stack",
  keywords: ["Bio Sync", "T3 stack"]
}

export default function DashboardLayout(
  { children }: ILayout
) {
  return (
    <>{children}</>
  )
}