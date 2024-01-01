import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth"

const InputForm = dynamic(() => import("./_components/User-form"))
const MobilePreview = dynamic(() => import("./_components/mobile-preview"))


export default async function DashboardPage() {
  const sessionDetails = await getServerAuthSession();

  const userDetails = sessionDetails?.user;

  (!sessionDetails) ? redirect("/api/auth/signin?callbackUrl=%2Fnew-bio-sync") : null;


  return (
    <section className={classNames({
      "py-0 sm:py-3 px-0 sm:px-5 my-2": true,
      "flex flex-row items-start justify-around": true,
      "h-fit": true,
    })}>
      <>
        <InputForm
          id={String(userDetails?.id)}
          image={userDetails?.image}
        />

        {/* Mobile preview screen */}
        <div className="hidden items-center justify-end lg:flex">
          <MobilePreview />
        </div>
      </>
    </section>
  )
}
