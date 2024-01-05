import { redirect } from "next/navigation";
import { memo } from "react";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth";
import SignInLandingComponent from "./_component/SignInPage";


async function SignInPage() {
  const sessionDetails = await getServerAuthSession();

  // redirecting users if session present
  sessionDetails ? redirect("/profile") : null;

  return (
    <section className={classNames({
      "px-2 sm:px-10 md:px-20 py-20 lg:py-28": true,
    })}>
      <SignInLandingComponent />
    </section>
  )
}

export default memo(SignInPage);