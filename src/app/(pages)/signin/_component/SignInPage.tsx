"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { memo } from "react";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))


function SignInLandingComponent() {
  return (
    <section className={classNames(`${montserrat.className}`, {
      "flex flex-row items-center justify-around": true,
    })}>
      <div className={classNames({
        "space-y-16": true,
      })}>
        <h1 className={classNames({
          "font-bold text-5xl text-orange-500 dark:text-amber-400": true,
        })}
        >
          Welcome to BioSync
        </h1>

        <p className={classNames({
          "text-3xl text-blue-700 dark:text-sky-300": true,
        })}>
          Your one stop to share your bio with anyone, <br /> anytime and anywhere...
        </p>

        <p className={classNames({
          "text-4xl font-bold dark:text-violet-400": true,
        })}>
          Sign In to continue to BioSync
        </p>

        <div className={classNames({
          "flex flex-row gap-x-3": true,
        })}>
          <Button
            variant={"secondary"}
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className={classNames({
              "text-zinc-700 dark:text-white font-bold": true,
              "outline outline-1 outline-zinc-100": true,
            })}
          >
            Continue with GitHub
          </Button>

          <Button
            variant={"secondary"}
            onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
            className={classNames({
              "outline outline-1 outline-zinc-100 text-zinc-700 dark:text-white font-bold": true,
            })}
          >
            Continue with Discord
          </Button>
        </div>
      </div>

      <div className={classNames({
      })}>
        <Image
          alt="sign-in image"
          src={"/sign-in.svg"}
          width={"500"}
          height={"500"}
          placeholder="blur"
          blurDataURL="/sign-in.svg"
        />
      </div>
    </section>
  )
}


export default memo(SignInLandingComponent);