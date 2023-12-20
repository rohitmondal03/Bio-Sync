"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Plus } from "lucide-react"
import classNames from "classnames"

import { inputFieldDetails } from "../_constants/profile-input-details-list"
import { submitUserBio } from "@/actions/submit-user-bio"
import { useData } from "@/hooks/useBioData"

import ShowDemoDataButton from "./buttons/show-demo-button"
import { useUser } from "@/hooks/useUser"
const PublishButton = dynamic(() => import("./buttons/publish-button"))
const PreviewButton = dynamic(() => import("./buttons/preview-button"))
const ResetButton = dynamic(() => import("./buttons/reset-button"))
const InputsField = dynamic(() => import("./profile-input-field"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Separator = dynamic(() => import("@/components/ui/separator").then((mod) => mod.Separator))
const Checkbox = dynamic(() => import("@/components/ui/checkbox").then((mod) => mod.Checkbox))
const Label = dynamic(() => import("@/components/ui/label").then((mod) => mod.Label))
const Input = dynamic(() => import("@/components/ui/input").then((mod) => mod.Input))


export default function InputForm() {
  const { userDetails } = useUser();
  const [projectLink, setProjectLink] = useState<string>("");
  const {
    data: userBioData,
    addProjectLink,
    toggleProfileImage,
    handleInputChange,
  } = useData();


  // add project
  function addProject() {
    if (projectLink === undefined || projectLink.trim().length < 1) {
      alert("Link cannot be empty");
      setProjectLink("");
      return;
    }
    if (userBioData.projectLinks.includes(projectLink)) {
      alert("Link is already in project");
      setProjectLink("");
      return;
    }

    addProjectLink(projectLink);
    setProjectLink("")
  }



  return (
    <form
      // action={async () => await submitUserBio(userBio)}
      className={classNames({
        "overflow-scroll": true,
        "h-[84vh] w-fit p-4": true,
      })}
    >
      {/* profile image */}
      <div className={classNames({
        "flex flex-col items-center justify-center gap-y-5": true,
        "w-[40vw]": true,
      })}>
        <Image
          src={String(userDetails?.image)}
          alt="profile pic"
          width={200}
          height={200}
          priority
          className={classNames({
            "h-40 w-40 bg-zinc-700": true,
            "rounded-full": true,
            "brightness-50": !userBioData.displayProfile,
          })}
        />

        <div className={classNames({
          "flex flex-row items-center gap-3": true,
        })}>
          <Label htmlFor="profile-image">Include Profile pic in your BioSync</Label>
          <Checkbox
            id="profile-image"
            defaultChecked={userBioData.displayProfile}
            onCheckedChange={toggleProfileImage}
          />
        </div>
      </div>


      <Separator
        orientation="horizontal"
        className={classNames({
          "my-16 h-1 rounded-full bg-zinc-700 dark:bg-zinc-300": true,
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
            value={String(userBioData[`${det.id}`])}
            onChange={(e) => handleInputChange(e.target.value, det.id)}
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
            "flex flex-col items-center gap-3": true,
          })}>
            <div className={classNames({
              "flex flex-row items-center justify-center gap-3": true,
            })}>
              <Input
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                className={classNames({
                  "outline-1 outline": true,
                  "w-96": true,
                })}
              />

              <Button
                size={"icon"}
                type="button"
                onClick={addProject}
              >
                <Plus />
              </Button>
            </div>

            <div className={classNames({
              "flex flex-col gap-2": true,
            })}>
              {userBioData.projectLinks.map((link) => (
                <Link
                  href={link.startsWith("https://") ? link : "https://" + link}
                  target="_blank"
                  key={link}
                  className={classNames({
                    "text-sm font-thin": true,
                    "border-2 border-zinc-800 dark:border-zinc-500 rounded-lg": true,
                    "p-2": true,
                  })}
                >
                  {link}
                </Link>
              ))}
            </div>
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
        <ResetButton />
      </div>
    </form>
  )
}
