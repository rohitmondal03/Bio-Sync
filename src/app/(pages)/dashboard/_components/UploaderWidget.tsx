"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import { Upload } from "lucide-react"
import classNames from "classnames"

import { useUser } from "@/hooks/useUser"
import { inputFieldDetails } from "../_constants/input-details-list"

const InputsField = dynamic(() => import("./input-field"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Separator = dynamic(() => import("@/components/ui/separator").then((mod) => mod.Separator))


type TLinks = {
  label: string
  link: string
}

type TUserBio = {
  name: string
  email: string
  bio: string
  githubLink: string
  linkedinLink: string
  twitterLink: string
  portfolioLink: string
  links: TLinks[]
}


export default function UploaderWidget() {
  const { userDetails } = useUser();

  const userProfilePic = userDetails?.image;  // profile pic

  const [userBio, setUserBio] = useState<TUserBio>({
    name: userDetails?.name ?? "",
    email: userDetails?.email ?? "",
    bio: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
    portfolioLink: "",
    links: []
  });

  // classes for input fields
  const inputTypeClass = "w-[43.5vw]"
  const textareaTypeClass = "w-[90rem]"


  return (
    <div className={classNames({
      "mx-auto my-12": true,
    })}>
      {/* profile image */}
      <div className={classNames({
        "flex flex-col items-center justify-center gap-y-5": true,
      })}>
        <Image
          src={userProfilePic!}
          alt="profile image"
          width={200}
          height={200}
          className={classNames({
            "h-40 w-40 bg-zinc-700": true,
            "rounded-full": true,
          })}
        />
        <Button
          variant={"default"}
          className={classNames({
            "font-bold": true,
          })}
        >
          Upload Image <Upload className="ml-2 scale-90" />
        </Button>
      </div>

      <Separator orientation="horizontal" className="my-16 h-2 rounded-full bg-zinc-400" />

      {/* input sections */}
      <form className={classNames({
        "flex flex-row flex-wrap items-center justify-center gap-5": true,
      })}>
        {inputFieldDetails.map((det) => (
          <InputsField
            id={det.id}
            inputType={det.inputType}
            label={det.label}
            placeholder={det.placeholder}
            widthClass={det.inputType === "Input" ? inputTypeClass : textareaTypeClass}
            // @ts-expect-error "giving value as any"
            value={String(userBio[`${det.id}`])}
            onChange={(e) =>
              setUserBio((prev) => ({ ...prev, [det.id]: e.target.value }))
            }
          />
        ))}

        {/* ADD ADDITION LINKS INPUT FIELD...!! */}

      </form>

      {/* footer buttons */}
      <FooterButtons />
    </div>
  )
}



function FooterButtons() {
  return (
    <div className={classNames({
      "flex flex-row items-center justify-center": true,
      "mt-20": true,
    })}>
      <Button
        variant={"destructive"}
        className={classNames({
          "mx-auto font-bold": true,
        })}
      >
        Show Preview
      </Button>

      <Button
        type="submit"
        variant={"default"}
        className={classNames({
          "mx-auto font-bold": true,
        })}
      >
        Make BioSync
      </Button>
    </div>
  )
}