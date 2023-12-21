"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import classNames from "classnames";
import { type IconType } from "react-icons";
import { AiOutlineMail, } from "react-icons/ai";
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
              <h1 className="text-2xl text-center font-bold underline">
                {name}
              </h1>
            )}


            {/* DISPLAYING USER'S PROFILE LINKS */}
            <div className="space-y-1">
              {email && (
                <Link
                  href={email}
                  className={classNames({
                    "flex items-center justify-start gap-2": true,
                    "text-sm text-gray-700": true,
                  })}
                >
                  <AiOutlineMail color="black" />
                  {email}
                </Link>
              )}


              {portfolioLink && (
                <Link
                  href={portfolioLink}
                  className={classNames({
                    "flex items-center justify-start gap-2": true,
                    "text-sm text-gray-700": true,
                  })}
                >
                  <FaUser color="black" />
                  {portfolioLink.slice(8, 50) + "..."}
                </Link>
              )}
            </div>


            {/* DISPLAYING 'BIO' OF USER */}
            {bio && (
              <ScrollArea className={classNames({
                "border-2 border-slate-500 rounded-2xl": true,
                "w-full h-48 p-2": true,
                "shadow-inner": true,
              })}>
                <h1 className="mb-2 text-md font-semibold">About {name},</h1>

                <p className="text-sm text-muted-foreground overflow-y-scroll">
                  {bio}
                </p>
              </ScrollArea>
            )}


            {/* DISPLAYING SOCIAL LINKS */}
            <div className="space-y-2  text-center">
              <h1 className="font-bold">Social Links</h1>

              <div className={classNames({
                "grid grid-cols-2 gap-2 items-center justify-center": true,
              })}>
                {linkedinLink &&
                  <SocialLinks
                    href={linkedinLink}
                    Icon={FaLinkedin as IconType}
                    label={"LinkedIn"}
                  />
                }

                {twitterLink &&
                  <SocialLinks
                    href={twitterLink}
                    Icon={FaTwitter as IconType}
                    label={"Twitter"}
                  />
                }

                {githubLink &&
                  <SocialLinks
                    href={githubLink}
                    Icon={FaGithub as IconType}
                    label={"GitHub"}
                  />
                }

                {discordLink &&
                  <SocialLinks
                    href={discordLink}
                    Icon={FaDiscord as IconType}
                    label={"Discord"}
                  />
                }

                {mediumLink && (
                  <SocialLinks
                    href={mediumLink}
                    Icon={FaMedium as IconType}
                    label="Medium"
                  />
                )}

                {hashnodeLink && (
                  <SocialLinks
                    Icon={FaHashnode as IconType}
                    href={hashnodeLink}
                    label="Hashnode"
                  />
                )}

                {devdotToLink && (
                  <SocialLinks
                    Icon={FaDev as IconType}
                    href={devdotToLink}
                    label="Dev"
                  />
                )}

                {youtubeLink &&
                  <SocialLinks
                    href={youtubeLink}
                    Icon={FaYoutube as IconType}
                    label={"Youtube"}
                  />
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


function SocialLinks(
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