"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { type ComponentType, type ChangeEvent, useState } from "react"
import classNames from "classnames"

import { inputFieldDetails } from "../_constants/profile-input-details-list"
import { submitUserBio } from "@/actions/submit-user-bio"
import { PlusCircle } from "lucide-react"
import ShowDemoDataButton from "./buttons/show-demo-button"

const PublishButton = dynamic(() => import("./buttons/publish-button"))
const PreviewButton = dynamic(() => import("./buttons/preview-button"))
const GithublinkButton = dynamic(() => import("./buttons/github-link-button"))
const OtherLinkInputFields = dynamic(() => import("./project-link-input-field"))
const InputsField = dynamic(() => import("./profile-input-field"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Separator = dynamic(() => import("@/components/ui/separator").then((mod) => mod.Separator))
const Checkbox = dynamic(() => import("@/components/ui/checkbox").then((mod) => mod.Checkbox))
const Label = dynamic(() => import("@/components/ui/label").then((mod) => mod.Label))


type TProps = {
  userName: string;
  userEmail: string;
  userProfilePic: string
}


export default function InputForm(
  { userName, userEmail, userProfilePic }: TProps
) {
  const [projectLinks, setProjectLinks] = useState<ComponentType<{
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
    projectLinks: [],
    includeProfilePicOrNot: true,
  });


  // function for deleting other link input field
  function removeInputField(idx: number) {
    setProjectLinks(prevLinks => prevLinks.filter((_, i) => idx !== i));
  }


  // for updating single index of 'otherLinks' array
  const updateOtherLinkAtIndex = (idx: number, newLink: string) => {
    setUserBio((prevState) => ({
      ...prevState,
      projectLinks: prevState.projectLinks.map((link, i) =>
        i === idx ? newLink : link
      ),
    }));
  };



  return (
    <form
      action={async () => await submitUserBio(userBio)}
      className={classNames({
        "overflow-scroll": true,
        "h-[84vh] w-fit p-4": true,
        "border-2 border-zinc-700 rounded-2xl": true,
      })}
    >
      {/* profile image */}
      <div className={classNames({
        "flex flex-col items-center justify-center gap-y-5": true,
        "w-[40vw]": true,
      })}>
        <Image
          src={userProfilePic}
          alt="profile pic"
          width={200}
          height={200}
          priority
          className={classNames({
            "h-40 w-40 bg-zinc-700": true,
            "rounded-full": true,
            "brightness-100": userBio.includeProfilePicOrNot,
            "brightness-50": !userBio.includeProfilePicOrNot,
          })}
        />

        <div className={classNames({
          "flex flex-row items-center gap-3": true,
        })}>
          <Label htmlFor="profile-image">Include Profile pic in your BioSync</Label>
          <Checkbox
            id="profile-image"
            defaultChecked={userBio.includeProfilePicOrNot}
            onCheckedChange={() => setUserBio((prev) => (
              { ...prev, includeProfilePicOrNot: !prev.includeProfilePicOrNot }
            ))}
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
        "flex flex-col items-center justify-center gap-5": true,
      })}>
        {inputFieldDetails.map((det) => (
          <InputsField
            id={det.id}
            inputType={det.inputType}
            label={det.label}
            required={det.id === "bio" || det.id === "linkedinLink" ? true : false}
            placeholder={det.placeholder}
            widthClass={"w-full"}
            // @ts-expect-error "giving value as any"
            value={String(userBio[`${det.id}`])}
            onChange={(e) => setUserBio((prev) => ({ ...prev, [det.id]: e.target.value }))}
          />
        ))}


        {/* PROJECT LINKS INPUT FIELD...!! */}
        <div className={classNames({
          "text-xl font-bold text-center": true,
          "py-6 my-1": true,
          "space-y-8": true,
        })}>
          <h1>Mention Project links <br /> (if any) </h1>

          <div className={classNames({
            "space-y-5 w-[30rem]": true,
          })}>
            {projectLinks.map((Comp, idx: number) => (
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
              onClick={() => setProjectLinks([...projectLinks, OtherLinkInputFields])}
            >
              <PlusCircle />
            </Button>
          </div>
        </div>
      </div>


      {/* footer buttons */}
      <div className={classNames({
        "flex flex-row flex-wrap items-center justify-around": true,
        "mt-10": true,
      })}>
        <PreviewButton />
        <PublishButton />
        <ShowDemoDataButton />
        <GithublinkButton />
      </div>
    </form>
  )
}
