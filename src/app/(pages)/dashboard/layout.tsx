import { type Metadata } from "next"

// import { getServerAuthSession } from "@/server/auth"


// async function getUser() {
//   const sessionDetails= await getServerAuthSession();

//   return sessionDetails?.user;
// }

export const metadata: Metadata= {
  title: `Dashboard`,
  description: "T3- stack",
  keywords: ["Bio Sync", "T3 stack"],
}

export default function DashboardLayout(
  { children }: ILayout
) {
  return (
    <>{children}</>
  )
}