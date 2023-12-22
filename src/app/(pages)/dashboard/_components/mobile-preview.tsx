"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";
import { AiOutlineBgColors, AiOutlineMail, } from "react-icons/ai";
import {
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaYoutube,
  FaMedium,
  FaHashnode,
  FaDev,
} from "react-icons/fa6";

import { useData } from "@/hooks/useBioData";
import { useUser } from "@/hooks/useUser";
import { inter } from "@/lib/fonts";
import { BACKGROUND_OPTIONS } from "@/components/background/background";
import { TBackgroundOptions } from "types";
import { ReactNode } from "react";

const ScrollArea = dynamic(() => import("@/components/ui/scroll-area").then(mod => mod.ScrollArea))


export default function MobilePreview() {
  const { data: userBioData } = useData();
  const { userDetails } = useUser();

  const {
    bio,
    displayProfile,
    email,
    githubLink,
    linkedinLink,
    name,
    // bgCode,
    portfolioLink,
    projectLinks,
    twitterLink,
    profilePicLink,
    youtubeLink,
    discordLink,
    devdotToLink,
    hashnodeLink,
    mediumLink,
  } = userBioData;


  // find bg component from code
  // const SELECTED_idx = BACKGROUND_OPTIONS?.find((opt) => opt.code === bgCode);

  // const Sbg = () => {
  //   if (SELECTED_idx) return SELECTED_idx.BackGround;
  //   else return null
  // }


  // checking if fields are empty or not
  function isBioEmpty() {
    return (
      !bio && !displayProfile && !email && !githubLink && !linkedinLink && !name && !portfolioLink && !twitterLink && !discordLink && !youtubeLink && projectLinks.length < 1
    )
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
        "py-10 px-2": true,
      })}>
        {isBioEmpty() ? (
          <h1 className="text-center">No Information</h1>
        ) : (
          <>
            {/* {Sbg && <Sbg />} */}
            <div className={classNames({
              "flex flex-col items-center justify-center gap-6": true,
              "text-left": true,
              "overflow-y-scroll": true,
            })}>
              {displayProfile && (
                <Image
                  src={profilePicLink || String(userDetails?.image)}
                  alt="Profile Picture"
                  height={100}
                  width={100}
                  className="rounded-full mx-auto"
                />
              )}

              {name && (
                <h1 className="font-bold text-center">
                  <span className="text-muted-foreground">MySelf,</span> <br />
                  <span className="font-bold text-2xl underline">{name}</span>
                </h1>
              )}


              {/* DISPLAYING USER'S PROFILE LINKS */}
              <div className="space-y-1">
                {email && (
                  <PersonalLinkMockup
                    link={email}
                    label={email}
                    Icon={AiOutlineMail as IconType}
                  />
                )}


                {portfolioLink && (
                  <PersonalLinkMockup
                    link={portfolioLink}
                    label={portfolioLink.slice(8, 50) + "...."}
                    Icon={FaUser as IconType}
                  />
                )}
              </div>


              {/* DISPLAYING 'BIO' OF USER */}
              {bio && (
                <ScrollArea className={classNames({
                  "border-2 border-slate-500 rounded-2xl": true,
                  "w-full h-48 p-2": true,
                  "shadow-inner": true,
                })}>
                  <h1 className="mb-2 text-lg font-semibold">About me,</h1>

                  <p className="text-sm text-gray-500 font-bold">
                    {bio}
                  </p>
                </ScrollArea>
              )}


              {/* DISPLAYING SOCIAL LINKS */}
              <div className="space-y-2 mt-6 text-center">
                <h1 className="font-bold text-xl">Connect with me...</h1>

                <div className={classNames({
                  "grid grid-cols-2 gap-2 items-center justify-center": true,
                })}>
                  {linkedinLink &&
                    <SocialLinkMockup
                      href={linkedinLink}
                      Icon={FaLinkedin as IconType}
                      label={"LinkedIn"}
                    />
                  }

                  {twitterLink &&
                    <SocialLinkMockup
                      href={twitterLink}
                      Icon={FaTwitter as IconType}
                      label={"Twitter"}
                    />
                  }

                  {githubLink &&
                    <SocialLinkMockup
                      href={githubLink}
                      Icon={FaGithub as IconType}
                      label={"GitHub"}
                    />
                  }

                  {discordLink &&
                    <SocialLinkMockup
                      href={discordLink}
                      Icon={FaDiscord as IconType}
                      label={"Discord"}
                    />
                  }

                  {mediumLink && (
                    <SocialLinkMockup
                      href={mediumLink}
                      Icon={FaMedium as IconType}
                      label="Medium"
                    />
                  )}

                  {hashnodeLink && (
                    <SocialLinkMockup
                      Icon={FaHashnode as IconType}
                      href={hashnodeLink}
                      label="Hashnode"
                    />
                  )}

                  {devdotToLink && (
                    <SocialLinkMockup
                      Icon={FaDev as IconType}
                      href={devdotToLink}
                      label="Dev"
                    />
                  )}

                  {youtubeLink &&
                    <SocialLinkMockup
                      href={youtubeLink}
                      Icon={FaYoutube as IconType}
                      label={"Youtube"}
                    />
                  }
                </div>
              </div>


              <div className="mt-6 space-y-2">
                <h1 className="font-bold text-xl text-center">Project Links</h1>

                <div className="flex flex-col gap-2">
                  {userBioData.projectLinks.map((link, idx) => (
                    <Link
                      href={link}
                      className={classNames({
                        "border-2 border-zinc-700 rounded-xl": true,
                        "px-2 py-1": true,
                        "text-sm": true,
                      })}
                    >
                      {idx + 1}{". "}{link.replace("https://", "")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}




function SocialLinkMockup(
  { href, label, Icon }: { href: string, label: string, Icon: IconType }
) {
  return (
    <Link
      href={href}
      className={classNames({
        "flex flex-row items-center gap-4": true,
        "text-sm": true,
        "border border-zinc-700 rounded-xl": true,
        "py-1 px-2": true,
      })}
      target="_blank"
    >
      <Icon fill="black" />
      {label}
    </Link>
  )
}


function PersonalLinkMockup(
  { link, label, Icon }: { link: string, label: string, Icon: IconType }
) {
  return (
    <Link
      href={link}
      className={classNames({
        "flex items-center justify-start gap-2": true,
        "text-sm text-gray-700": true,
      })}
    >
      <Icon color="black" />
      {label}
    </Link>
  )
}