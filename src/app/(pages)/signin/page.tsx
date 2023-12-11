import classNames from "classnames";

import SignInLandingComponent from "./_component/SignInPage";


export default function SignInPage() {
  return (
    <section className={classNames({
      "px-24 py-24": true,
    })}>
      <SignInLandingComponent />
    </section>
  )
}