"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { type ComponentType, useState } from "react"
import { Upload } from "lucide-react"
import classNames from "classnames"

import { useUser } from "@/hooks/useUser"
import { inputFieldDetails } from "../_constants/input-details-list"

const OtherLinkInputFields = dynamic(() => import("./other-link-input-field"))
const FooterButtons = dynamic(() => import("./footer-buttons"))
const InputsField = dynamic(() => import("./profile-input-field"))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Separator = dynamic(() => import("@/components/ui/separator").then((mod) => mod.Separator))


export default function UploaderWidget() {
  const { userDetails } = useUser();
  const userProfilePic = userDetails?.image;  // profile pic

  const [otherLinks, setOtherLinks] = useState<ComponentType<{ onClick: () => void; }>[]>([]);
  const [userBio, setUserBio] = useState<TUserBio>({
    name: userDetails?.name ?? "",
    email: userDetails?.email ?? "",
    bio: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
    portfolioLink: "",
    otherLinks: []
  });


  // classes for profile input fields
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

      <Separator
        orientation="horizontal"
        className={classNames({
          "my-16 h-2 rounded-full bg-zinc-700 dark:bg-zinc-300": true,
        })}
      />

      {/* input sections */}
      <section className={classNames({
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


        {/* ADDITION LINKS INPUT FIELD...!! */}
        <div className={classNames({
          "text-xl font-bold": true,
          "py-6 my-1": true,
          "space-y-8": true,
        })}>
          <h1>Mention other links</h1>

          <div>
            <div className={classNames({
              "space-y-5": true,
            })}>
              {otherLinks.map((Comp, idx: number) => (
                <Comp onClick={() => console.log(idx)} />
              ))}

              <Button
                size={"icon"}
                variant={"default"}
                className={classNames({
                  "mx-auto w-full": true,
                  "font-bold": true,
                })}
                onClick={() => setOtherLinks([...otherLinks, OtherLinkInputFields])}
              >
                Add More...
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* footer buttons */}
      <FooterButtons />
    </div>
  )
}
