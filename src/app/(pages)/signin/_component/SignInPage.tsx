"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import { memo } from "react";
import classNames from "classnames";
import { FaDiscord, FaGithub } from "react-icons/fa6";


const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))


function SignInLandingComponent() {
  return (
    <section className={classNames({
      "flex flex-row items-center justify-around font-bold": true,
    })}>
      <div className={classNames({
        "space-y-16": true,
      })}>
        <h1 className={classNames({
          "font-bold text-5xl text-orange-500": true,
        })}
        >
          Welcome to BioSync
        </h1>

        <p className={classNames({
          "text-3xl": true,
        })}>
          Your one stop to share your bio with anyone, <br /> anytime and anywhere...
        </p>

        <div className={classNames({
          "space-y-10": true,
        })}>
          <p className={classNames({
            "text-4xl text-red-500": true,
            "underline": true,
          })}>
            Sign In to continue
          </p>

          <div className={classNames({
            "flex flex-row items-start gap-10 px-4": true,
          })}>
            <Button
              variant={"outline"}
              onClick={() => signIn("github", { callbackUrl: "/profile" })}
              className="btn outline outline-2 outline-zinc-400 w-fit scale-125"
            >
              <FaGithub className="" />
            </Button>

            <Button
              variant={"outline"}
              onClick={() => signIn("discord", { callbackUrl: "/profile" })}
              className="btn outline outline-2 outline-zinc-400 w-fit scale-125"
            >
              <FaDiscord className="" />
            </Button>
          </div>
        </div>
      </div>



      <div>
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