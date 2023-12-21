"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import classNames from "classnames";
import {
  LucideGithub,
  LucideLinkedin,
  LucideMail,
  LucideTwitter,
  LucideUser
} from "lucide-react";

import { useData } from "@/hooks/useBioData";
import { useUser } from "@/hooks/useUser";
import { inter } from "@/lib/others/fonts";

const ScrollArea = dynamic(() => import("@/components/ui/scroll-area").then(mod => mod.ScrollArea))


export default function MobilePreview() {
  const { data: userBioData } = useData();
  const { userDetails } = useUser();

  const { bio, displayProfile, email, githubLink, linkedinLink, name, portfolioLink, projectLinks, twitterLink } = userBioData;

  function isBioEmpty() {
    return (!bio && !displayProfile && !email && !githubLink && !linkedinLink && !name && !portfolioLink && !twitterLink && projectLinks.length < 1)
  }


  return (
    <div className="relative z-50 mx-auto h-[600px] w-[300px] min-w-[320px] rounded-[42px] border-[14px] border-primary bg-primary shadow-xl">
      <div className="absolute left-1/2 top-0 z-50 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem] bg-primary" />
      <div className="absolute left-[-17px] top-[124px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary" />
      <div className="absolute left-[-17px] top-[178px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary" />
      <div className="absolute right-[-17px] top-[142px] z-50 h-[64px] w-[4px] rounded-r-lg bg-primary" />
      <div className={classNames(`${inter.className}`, {
        'relative h-full w-full overflow-y-scroll break-words rounded-[32px]': true,
        "bg-white": true,
        "pt-10 px-2": true,
      })}>
        {isBioEmpty() ? (
          <h1 className="text-center">No Information</h1>
        ) : (
          <div className={`text-left flex flex-col items-center gap-4`}>
            {displayProfile && (
              <Image
                src={String(userDetails?.image)}
                alt="Profile Picture"
                height={100}
                width={100}
                className="rounded-full"
              />
            )}


            <h1 className="text-2xl text-center font-bold underline">
              {userBioData.name}
            </h1>


            {/* DISPLAYING USER'S SOCIAL LINKS */}
            <div className="space-y-1">
              <Link
                href={userBioData.email}
                className={classNames({
                  "flex items-center justify-start gap-1": true,
                  "text-sm text-gray-500": true,
                })}
              >
                <LucideMail className="scale-75" color="black" />
                {userBioData.email}
              </Link>


              <Link
                href={userBioData.linkedinLink}
                className={classNames({
                  "flex items-center justify-start gap-1": true,
                  "text-sm text-gray-500": true,
                })}
              >
                <LucideLinkedin className="scale-75" color="black" />
                {userBioData.linkedinLink.replace("https://www.linkedin.com/in/", "")}
              </Link>


              <Link
                href={userBioData.githubLink}
                className={classNames({
                  "flex items-center justify-start gap-1": true,
                  "text-sm text-gray-500": true,
                })}
              >
                <LucideGithub className="scale-75" color="black" />
                {userBioData.githubLink.replace("https://github.com/", "")}
              </Link>


              <Link
                href={userBioData.twitterLink}
                className={classNames({
                  "flex items-center justify-start gap-1": true,
                  "text-sm text-gray-500": true,
                })}
              >
                <LucideTwitter className="scale-75" color="black" />
                {userBioData.twitterLink.replace("https://twitter.com/", "")}
              </Link>


              <Link
                href={userBioData.twitterLink}
                className={classNames({
                  "flex items-center justify-start gap-1": true,
                  "text-sm text-gray-500": true,
                })}
              >
                <LucideUser className="scale-75" color="black" />
                {/* {userBioData.portfolioLink} */}
                {userBioData.portfolioLink.slice(8, 50) + "..."}
              </Link>
            </div>


            {/* DISPLAYING 'BIO' OF USER */}
            <ScrollArea className={classNames({
              "border-2 border-slate-500 rounded-2xl": true,
              "w-full h-44 p-2": true,
              "overflow-y-scroll": true
            })}>
              <h1 className="mb-2 text-md font-semibold">About {userBioData.name},</h1>

              <p className="text-sm text-muted-foreground">
                {userBioData.bio}
              </p>
            </ScrollArea>

          </div>
        )}
      </div>
    </div>
  )
}