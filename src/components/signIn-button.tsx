"use client"

import { signIn } from "next-auth/react";

import { Button } from "./ui/button";
import classNames from "classnames";



export function SignInWithGithubButton() {
  return (
    <Button
      variant={"outline"}
      className={classNames({
        "border-2": true,
      })}
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      Sign In with GitHub
    </Button>
  )
}

export function SignInWithDiscordButton() {
  return (
    <Button
      variant={"outline"}
      onClick={(() => signIn("discord", { callbackUrl: "/" }))}
    >
      Sign In with Discord
    </Button>
  )
}