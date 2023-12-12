import { redirect } from "next/navigation";

import { getServerAuthSession } from "@/server/auth"


export default async function DashboardPage() {
  const sessionDetails= await getServerAuthSession();

  if(!sessionDetails) redirect("/api/auth/signin?callbackUrl=%2Fdashboard")


  return (
    <div>Dashboard</div>
  )
}
