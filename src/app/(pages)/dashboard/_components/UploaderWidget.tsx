"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { type ComponentType, type ChangeEvent, useState, useEffect } from "react"
import { Upload } from "lucide-react"
import classNames from "classnames"

import { inputFieldDetails } from "../_constants/input-details-list"
import { submitUserBio } from "../../../../actions/submit-user-bio"
import { Label } from "@/components/ui/label"

const OtherLinkInputFields = dynamic(() => import("./other-link-input-field"))
const FooterButtons = dynamic(() => import("./footer-buttons"))
const InputsField = dynamic(() => import("./profile-input-field"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Separator = dynamic(() => import("@/components/ui/separator").then((mod) => mod.Separator))
const Checkbox = dynamic(() => import("@/components/ui/checkbox").then((mod) => mod.Checkbox))


type TProps = {
  userName: string;
  userEmail: string;
  userProfilePic: string
}


export default function UploaderWidget(
  { userName, userEmail, userProfilePic }: TProps
) {
  const [otherLinks, setOtherLinks] = useState<ComponentType<{
    onClick: () => void,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }>[]>([]);
  const [userBio, setUserBio] = useState<TUserBio>({
    name: userName,
    email: userEmail,
    bio: "",
    profilePic: userProfilePic,
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
    portfolioLink: "",
    otherLinks: [],
    includeProfilePicOrNot: true
  });


  // classes for profile input fields
  const inputTypeClass = "w-[43.5vw]"
  const textareaTypeClass = "w-[90rem]"


  // function for deleting other link input field
  function removeInputField(idx: number) {
    setOtherLinks(prevOtherLinks => prevOtherLinks.filter((_, i) => idx !== i));
  }


  // for updating single index of 'otherLinks' array
  const updateOtherLinkAtIndex = (idx: number, newLink: string) => {
    setUserBio((prevState) => ({
      ...prevState,
      otherLinks: prevState.otherLinks.map((link, i) =>
        i === idx ? newLink : link
      ),
    }));
  };



  return (
    <form
      className={classNames({
        "mx-auto my-12": true,
      })}
      action={async () => await submitUserBio(userBio)}
    >
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
          priority
        />

        <div className={classNames({
          "flex flex-row items-center gap-3": true,
        })}>
          <Label htmlFor="profile-image">Include Profile pic in your BioSync</Label>
          <Checkbox
            id="profile-image"
            onCheckedChange={() => setUserBio((prev) => (
              { ...prev, includeProfilePic: !prev.includeProfilePicOrNot }
            ))}
            defaultChecked
          />
        </div>
      </div>

      <Separator
        orientation="horizontal"
        className={classNames({
          "my-16 h-2 rounded-full bg-zinc-700 dark:bg-zinc-300": true,
        })}
      />

      {/* input sections */}
      <div className={classNames({
        "flex flex-row flex-wrap items-center justify-center gap-5": true,
      })}>
        {inputFieldDetails.map((det) => (
          <InputsField
            id={det.id}
            inputType={det.inputType}
            label={det.label}
            required={det.id === "bio" || det.id === "linkedinLink" ? true : false}
            placeholder={det.placeholder}
            widthClass={det.inputType === "Input" ? inputTypeClass : textareaTypeClass}
            // @ts-expect-error "giving value as any"
            value={String(userBio[`${det.id}`])}
            onChange={(e) => setUserBio((prev) => ({ ...prev, [det.id]: e.target.value }))}
          />
        ))}


        {/* ADDITION LINKS INPUT FIELD...!! */}
        <div className={classNames({
          "text-xl font-bold text-center": true,
          "py-6 my-1": true,
          "space-y-8": true,
        })}>
          <h1>Mention other links</h1>

          <div className={classNames({
            "space-y-5 w-[30rem]": true,
          })}>
            {otherLinks.map((Comp, idx: number) => (
              <Comp
                key={idx}
                onClick={() => removeInputField(idx)}
                onChange={(e) => updateOtherLinkAtIndex(idx, e.target.value)}
              />
            ))}

            <Button
              type="button"
              variant={"default"}
              className={classNames({
                "mx-auto w-full": true,
                "font-bold": true,
              })}
              // @ts-expect-error "giving soome unknown error"
              onClick={() => setOtherLinks([...otherLinks, OtherLinkInputFields])}
            >
              Add More...
            </Button>
          </div>
        </div>
      </div>

      {/* footer buttons */}
      <FooterButtons />
    </form>
  )
}
