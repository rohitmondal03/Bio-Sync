import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"
import { montserrat } from "@/lib/fonts";

const InputForm= dynamic(() => import("./_components/User-form"))
const MobilePreview= dynamic(() => import("./_components/mobile-preview"))


export default async function DashboardPage() {
  const sessionDetails = await getServerAuthSession();

  const userDetails= sessionDetails?.user;

  (!sessionDetails) ? redirect("/api/auth/signin?callbackUrl=%2Fdashboard") : null;


  return (
    <section className={classNames(`${montserrat.className}`, {
      "py-1 px-20 my-2": true,
      "flex flex-row items-start justify-around": true,
      "h-fit": true,
    })}>
      <>
        <InputForm id={String(userDetails?.id)} image={userDetails?.image} />

        {/* Mobile preview screen */}
        <div className="hidden items-center justify-end lg:flex">
          <MobilePreview />
        </div>
      </>
    </section>
  )
}
