"use client"

import { signIn } from "next-auth/react";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { FloatingUsersComponent } from "./floating-users";


export default function SignInLandingComponent() {
  return (
    <section className={classNames(`${montserrat.className}`, {
      "flex flex-row items-center justify-between divide-x-2": true,
      "divide-zinc-400 dark:divide-zinc-600": true,
    })}>
      <div className={classNames({
        "space-y-16": true,
      })}>
        <h1 className={classNames({
          "font-bold dark:text-amber-400 text-5xl": true,
        })}
        >
          Welcome to BioSync
        </h1>

        <p className={classNames({
          "text-3xl": true,
        })}>
          Your one stop to share your bio with anyone, <br /> anytime and anywhere...
        </p>

        <p className={classNames({
          "text-4xl font-bold text-orange-400": true,
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
              "outline outline-1 outline-zinc-500 text-pink-500 font-bold": true,
            })}
          >
            Continue with GitHub
          </Button>

          <Button
            variant={"secondary"}
            onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
            className={classNames({
              "outline outline-1 outline-zinc-500 text-pink-500 font-bold": true,
            })}
          >
            Continue with Discord
          </Button>
        </div>
      </div>

      <div className={classNames({
        "relative h-[60vh] w-[35vw]": true,
      })}>
        <FloatingUsersComponent
          top={"top-5"}
          left={"left-0"}
          bgColor="bg-red-600 dark:bg-amber-700"
          skeleton1Bg="bg-orange-400"
          skeleton2Bg="bg-yellow-400"
        />

        <FloatingUsersComponent
          top={"top-10"}
          left={"left-48"}
          bgColor="bg-sky-600"
          skeleton1Bg="bg-cyan-400"
          skeleton2Bg="bg-violet-300"
        />
      </div>
    </section>
  )
}
