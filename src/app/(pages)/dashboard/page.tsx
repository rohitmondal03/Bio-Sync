import { redirect } from "next/navigation";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { montserrat } from "@/lib/fonts";
import UploaderWidget from "./_components/UploaderWidget";


export default async function DashboardPage() {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;  //user's details
  const userName = userDetails?.name;

  (!sessionDetails) ? redirect("/api/auth/signin?callbackUrl=%2Fdashboard") : null;


  return (
    <section className={classNames(`${montserrat.className}`, {
      "py-12 px-20": true,
    })}>
      <h1 className={classNames({
        "text-4xl font-bold text-center": true,
      })}>
        <span className={classNames({
          "text-rose-500 dark:text-amber-400 underline": true,
        })}>
          {userName}&apos;s
        </span>
        &nbsp;BioSync
      </h1>

      <UploaderWidget />
    </section>
  )
}
