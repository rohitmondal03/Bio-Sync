"use client"

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import classNames from "classnames";

import { montserrat } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";


export default function SignInLandingComponent() {
  const { authStatus, userDetails } = useUser();


  return (
    <section className={classNames(`${montserrat.className}`, {
      "flex flex-row items-center justify-around": true,
    })}>
      <div className={classNames({
        "space-y-16": true,
      })}>
        <h1 className={classNames({
          "font-bold text-5xl": true,
        })}
        >
          Welcome to BioSync
        </h1>

        <p className={classNames({
          "text-3xl text-blue-700 dark:text-sky-300": true,
        })}>
          Your one stop to share your bio with anyone, <br /> anytime and anywhere...
        </p>

        {authStatus === "unauthenticated"
          ? demo.unauthFooter
          : demo.authFooter
        }
      </div >

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
    </section >
  )
}



const demo = {
  unauthFooter: (
    <>
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
            "outline outline-1 outline-zinc-100 text-zinc-700 dark:text-white font-bold": true,
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
    </>
  ),

  authFooter: (
    <div className={classNames({
      "flex flex-col gap-y-5": true
    })}>
      <p className={classNames({
        "": true,
      })}>
        Continue to your Dashboard
      </p>

      <Link href={"/dashboard"}>
        <Button variant={"secondary"}>
          Head to Dashboard
        </Button>
      </Link>
    </div>
  )
}