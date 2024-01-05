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
      "flex flex-col lg:flex-row items-center justify-around gap-24 lg:gap-32 xl:gap-32": true,
      "font-bold": true,
    })}>
      <div className={classNames({
        "space-y-6 sm:space-y-10 lg:space-y-16": true,
        "text-center md:text-left": true,
      })}>
        <h1 className={classNames({
          "font-bold text-4xl sm:text-5xl text-orange-500": true,
        })}
        >
          Welcome to BioSync
        </h1>

        <p className={classNames({
          "text-xl sm:text-3xl": true,
          "font-thin": true,
        })}>
          Sign In to BioSync to continue to use the services, and share the link with anyone...
        </p>

        <div className={classNames({
          "space-y-5 sm:space-y-10": true,
        })}>
          <p className={classNames({
            "text-2xl sm:text-4xl text-red-500": true,
            "underline": true,
          })}>
            Sign In to continue
          </p>

          <div className={classNames({
            "flex flex-row justify-center md:justify-start gap-10 px-4": true,
          })}>
            <Button
              variant={"outline"}
              onClick={() => signIn("github", { callbackUrl: "/profile" })}
              className="btn outline outline-2 outline-zinc-500 w-fit scale-125"
            >
              <FaGithub className="scale-125" />
            </Button>

            <Button
              variant={"outline"}
              onClick={() => signIn("discord", { callbackUrl: "/profile" })}
              className="btn outline outline-2 outline-zinc-500 w-fit scale-125"
            >
              <FaDiscord className="scale-125" />
            </Button>
          </div>
        </div>
      </div>


      <div>
        <Image
          alt="sign-in image"
          src={"/assets/sign_in_img.svg"}
          width={"500"}
          height={"500"}
          placeholder="blur"
          blurDataURL="/sign-in.svg"
          className="scale-100 lg:scale-125"
        />
      </div>
    </section>
  )
}


export default memo(SignInLandingComponent);