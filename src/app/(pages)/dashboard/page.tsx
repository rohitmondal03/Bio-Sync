import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { montserrat } from "@/lib/others/fonts";

const UploaderWidget = dynamic(() => import("./_components/UploaderWidget"))


export default async function DashboardPage() {
  const sessionDetails = await getServerAuthSession();

  (!sessionDetails) ? redirect("/api/auth/signin?callbackUrl=%2Fdashboard") : null;

  return (
    <section className={classNames(`${montserrat.className}`, {
      "py-3 px-20": true,
      "h-fit": true,
    })}>
      <UploaderWidget />
    </section>
  )
}
