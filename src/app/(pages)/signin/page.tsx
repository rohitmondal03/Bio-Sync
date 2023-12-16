import { redirect } from "next/navigation";
import { memo } from "react";
import classNames from "classnames";

import { getServerAuthSession } from "@/server/auth";
import SignInLandingComponent from "./_component/SignInPage";


async function SignInPage() {
  const sessionDetails = await getServerAuthSession();

  // redirecting users if session present
  // sessionDetails ? redirect("/dashboard") : null;

  return (
    <section className={classNames({
      "px-20 py-24": true,
    })}>
      <SignInLandingComponent />
    </section>
  )
}

export default memo(SignInPage);