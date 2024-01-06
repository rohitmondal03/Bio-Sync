"use client"

import dynamic from "next/dynamic";
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
  FaWhatsapp,
} from "react-icons/fa6";

import { useData } from "@/hooks/useBioData";
import { useUser } from "@/hooks/useUser";
import { inter } from "@/lib/fonts";
import { isSocialFieldsEmpty } from "@/lib/functions/isSocialFieldsEmpty";
import { isUserBioEmpty } from "@/lib/functions/isUserBioEmpty";
import {
  DEVDOTTO_CONST,
  DISCORD_CONST,
  GITHUB_CONST,
  HASHNODE_CONST,
  LINKEDIN_CONST,
  MEDIUM_CONST,
  TWITTER_CONST,
  WHATSAPP_CONST,
  YOUTUBE_CONST
} from "@/lib/constants/social-links-skeleton"

const ProjectLinksMockup = dynamic(() => import("@/components/mockup/projects-links-mockup").then((mod) => mod.ProjectLinksMockup))
const PersonalLinkMockup = dynamic(() => import("@/components/mockup/personal-link-mockup").then((mod) => mod.PersonalLinkMockup))
const SocialLinkMockup = dynamic(() => import("@/components/mockup/social-link-mockup").then((mod) => mod.SocialLinkMockup))
const SkillsMockup = dynamic(() => import("@/components/mockup/skills-mockup").then((mod) => mod.SkillsMockup))
const ScrollArea = dynamic(() => import("@/components/ui/scroll-area").then(mod => mod.ScrollArea))
const Avatar = dynamic(() => import("@/components/ui/avatar").then(mod => mod.Avatar))
const AvatarFallback = dynamic(() => import("@/components/ui/avatar").then(mod => mod.AvatarFallback))
const AvatarImage = dynamic(() => import("@/components/ui/avatar").then(mod => mod.AvatarImage))


export default function MobilePreview() {
  const { data: userBioData } = useData();
  const { userDetails } = useUser();

  const {
    name,
    profilePicLink,
    bio,
    displayProfile,
    email,
    portfolioLink,
    whatsAppNumber,
    githubUsername,
    linkedinUsername,
    twitterUsername,
    youtubeUsername,
    discordUsername,
    devdotToUsername,
    hashnodeUsername,
    mediumUsername,
    projectLinks,
    skills,
  } = userBioData;


  return (
    <div className="relative mx-auto h-[600px] w-[300px] min-w-[320px] rounded-[42px] border-[14px] border-primary bg-primary shadow-xl">
      <div className="absolute z-20 left-1/2 top-0 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem] bg-primary" />
      <div className="absolute left-[-17px] top-[124px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary" />
      <div className="absolute left-[-17px] top-[178px] z-50 h-[46px] w-[4px] rounded-l-lg bg-primary" />
      <div className="absolute right-[-17px] top-[142px] z-50 h-[64px] w-[4px] rounded-r-lg bg-primary" />
      <div className={classNames(`${inter.className}`, {
        'relative h-full w-full overflow-y-scroll break-words rounded-[32px]': true,
        "bg-white": true,
        "py-10 px-2": true,
        "bg-zinc-100": true,
      })}>
        {isUserBioEmpty() ? (
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
                <Avatar className="h-32 w-32">
                  <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
                  <AvatarImage src={String(profilePicLink || userDetails?.image)} alt="profile image" />
                </Avatar>
              )}

              {name && (
                <h1 className="font-bold text-center">
                  <span className="text-zinc-600">MySelf,</span> <br />
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
                  "border border-slate-600 rounded-2xl": true,
                  "w-[95%] h-48 py-1 px-2": true,
                  "shadow-[4px_4px_0] shadow-slate-600": true,
                  "bg-slate-200": true,
                })}>
                  <h1 className="mb-2 text-lg font-semibold">About me,</h1>

                  <p className="text-sm text-gray-900">
                    {bio}
                  </p>
                </ScrollArea>
              )}


              {/* DISPLAYING SOCIAL LINKS */}
              {!isSocialFieldsEmpty() && (
                <div className="space-y-3 mt-6 text-center">
                  <h1 className="font-bold text-xl">Connect with me...</h1>

                  <div className={classNames({
                    "grid grid-cols-2 gap-2 items-center justify-center": true,
                  })}>
                    {whatsAppNumber && (
                      <SocialLinkMockup
                        href={WHATSAPP_CONST + whatsAppNumber}
                        Icon={FaWhatsapp as IconType}
                        label={"WhatsApp"}
                      />
                    )}

                    {linkedinUsername &&
                      <SocialLinkMockup
                        href={LINKEDIN_CONST + linkedinUsername}
                        Icon={FaLinkedin as IconType}
                        label={"LinkedIn"}
                      />
                    }

                    {twitterUsername &&
                      <SocialLinkMockup
                        href={TWITTER_CONST + twitterUsername}
                        Icon={FaTwitter as IconType}
                        label={"Twitter"}
                      />
                    }

                    {githubUsername &&
                      <SocialLinkMockup
                        href={GITHUB_CONST + githubUsername}
                        Icon={FaGithub as IconType}
                        label={"GitHub"}
                      />
                    }

                    {discordUsername &&
                      <SocialLinkMockup
                        href={DISCORD_CONST + discordUsername}
                        Icon={FaDiscord as IconType}
                        label={"Discord"}
                      />
                    }

                    {mediumUsername && (
                      <SocialLinkMockup
                        href={MEDIUM_CONST + mediumUsername}
                        Icon={FaMedium as IconType}
                        label="Medium"
                      />
                    )}

                    {hashnodeUsername && (
                      <SocialLinkMockup
                        Icon={FaHashnode as IconType}
                        href={HASHNODE_CONST + hashnodeUsername}
                        label="Hashnode"
                      />
                    )}

                    {devdotToUsername && (
                      <SocialLinkMockup
                        Icon={FaDev as IconType}
                        href={DEVDOTTO_CONST + devdotToUsername}
                        label="Dev"
                      />
                    )}

                    {youtubeUsername &&
                      <SocialLinkMockup
                        href={YOUTUBE_CONST + youtubeUsername}
                        Icon={FaYoutube as IconType}
                        label={"Youtube"}
                      />
                    }
                  </div>
                </div>
              )}


              {/* DISPLAYING SKILLS */}
              {skills.length > 0 && (
                <div className="my-5">
                  <h1 className="font-bold text-xl text-center">Skills</h1>

                  <div className="space-y-3">
                    {skills.map((skill, idx) => (
                      <SkillsMockup skill={skill} idx={idx} key={skill} />
                    ))}
                  </div>
                </div>
              )}


              {/* DISPLAYING PROJECTS LINKS */}
              {projectLinks.length > 0 && (
                <div className="mt-6 space-y-2 mb-2">
                  <h1 className="font-bold text-xl text-center">Project Links</h1>

                  <div className="flex flex-col gap-3">
                    {userBioData.projectLinks.map((link, idx) => (
                      <ProjectLinksMockup
                        idx={idx}
                        link={link}
                        key={link}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}