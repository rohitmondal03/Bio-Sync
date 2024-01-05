import dynamic from "next/dynamic";
import Image from "next/image";
import classNames from "classnames";
import { ScreenShare } from "lucide-react";
import { type IconType } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaDev,
  FaDiscord,
  FaGithub,
  FaHashnode,
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaUser,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa6";

import { inter } from "@/lib/fonts";
import { useData } from "@/hooks/useBioData";
import { isUserBioEmpty } from "@/lib/functions/isUserBioEmpty";
import { isSocialFieldsEmpty } from "@/lib/functions/isSocialFieldsEmpty";

const SocialLinkMockup= dynamic(() => import("@/components/mockup/social-link-mockup").then((mod) => mod.SocialLinkMockup))
const ProjectLinksMockup= dynamic(() => import("@/components/mockup/projects-links-mockup").then((mod) => mod.ProjectLinksMockup))
const PersonalLinkMockup= dynamic(() => import("@/components/mockup/personal-link-mockup").then((mod) => mod.PersonalLinkMockup))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Drawer= dynamic(() => import("@/components/ui/drawer").then((mod) => mod.Drawer))
const DrawerContent= dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerContent))
const DrawerTrigger= dynamic(() => import("@/components/ui/drawer").then((mod) => mod.DrawerTrigger))


export default function PreviewButton() {
  const { data } = useData();
  const {
    displayProfile,
    profilePicLink,
    name,
    bio,
    email,
    portfolioLink,
    devdotToUsername, discordUsername, githubUsername, hashnodeUsername, linkedinUsername, mediumUsername, twitterUsername, whatsAppNumber, youtubeUsername,
    projectLinks
  } = data;


  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant={"default"}
          className="btn flex lg:hidden"
        >
          Preview <ScreenShare className="icon" />
        </Button>
      </DrawerTrigger>


      <DrawerContent className={`${inter.className} h-[80vh]`}>
        {isUserBioEmpty() ? (
          <h1 className="text-center mt-5">No Information</h1>
        ) : (
          <section className={classNames({
            "py-5 px-2 xs:px-5 space-y-10": true,
            "overflow-y-scroll": true,
            "text-center": true,
          })}>
            <div className="space-y-3">
              {displayProfile &&
                <Image
                  src={profilePicLink}
                  alt="profile pic"
                  height={150}
                  width={150}
                  className="mx-auto rounded-xl"
                />
              }

              {name && (
                <h1>
                  <span className="text-muted-foreground">Myself,</span> <br />
                  <span className="text-2xl font-bold underline">{name}</span>
                </h1>
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              {email && (
                <PersonalLinkMockup
                  Icon={AiOutlineMail as IconType}
                  label={email}
                  link={"mailto:" + email}
                  key={`link-${email}`}
                  className="font-bold"
                />
              )}

              {portfolioLink && (
                <PersonalLinkMockup
                  Icon={FaUser as IconType}
                  label={portfolioLink.replace("https://", "").slice(0, 25)}
                  link={portfolioLink}
                  key={`link-${portfolioLink}`}
                  className="font-bold"
                />
              )}
            </div>

            {bio && (
              <p className={classNames({
                "border-2 border-zinc-600 rounded-xl": true,
                "text-left text-sm xs:text-base": true,
                "p-3": true,
              })}>
                {bio}

              </p>
            )}

            {!isSocialFieldsEmpty() && (
              <div className="space-y-3">
                <h1 className="font-bold text-xl">
                  My Social Links...
                </h1>

                <div className={classNames({
                  "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-center": true,
                })}>
                  {whatsAppNumber && (
                    <SocialLinkMockup
                      href={"https://wa.me/" + whatsAppNumber}
                      Icon={FaWhatsapp as IconType}
                      label={"WhatsApp"}
                    />
                  )}

                  {linkedinUsername &&
                    <SocialLinkMockup
                      href={"https://www.linkedin.com/in/" + linkedinUsername}
                      Icon={FaLinkedin as IconType}
                      label={"LinkedIn"}
                    />
                  }

                  {twitterUsername &&
                    <SocialLinkMockup
                      href={"https://twitter.com/" + twitterUsername}
                      Icon={FaTwitter as IconType}
                      label={"Twitter"}
                    />
                  }

                  {githubUsername &&
                    <SocialLinkMockup
                      href={"https://github.com/" + githubUsername}
                      Icon={FaGithub as IconType}
                      label={"GitHub"}
                    />
                  }

                  {discordUsername &&
                    <SocialLinkMockup
                      href={"https://discord.com/users/" + discordUsername}
                      Icon={FaDiscord as IconType}
                      label={"Discord"}
                    />
                  }

                  {mediumUsername && (
                    <SocialLinkMockup
                      href={"https://medium.com/" + mediumUsername}
                      Icon={FaMedium as IconType}
                      label="Medium"
                    />
                  )}

                  {hashnodeUsername && (
                    <SocialLinkMockup
                      Icon={FaHashnode as IconType}
                      href={"https://hashnode.com/" + hashnodeUsername}
                      label="Hashnode"
                    />
                  )}

                  {devdotToUsername && (
                    <SocialLinkMockup
                      Icon={FaDev as IconType}
                      href={"https://dev.to/" + devdotToUsername}
                      label="Dev"
                    />
                  )}

                  {youtubeUsername &&
                    <SocialLinkMockup
                      href={"https://www.youtube.com/" + youtubeUsername}
                      Icon={FaYoutube as IconType}
                      label={"Youtube"}
                    />
                  }
                </div>
              </div>
            )}

            {projectLinks.length > 0 && (
              <div className="space-y-3">
                <h1 className="font-bold text-2xl underline">
                  Project Links
                </h1>

                <div className={classNames({
                  "flex flex-col sm:flex-row gap-3 items-center justify-center": true,
                })}>
                  {projectLinks.map((link, idx) =>
                    <ProjectLinksMockup
                      idx={idx}
                      link={link}
                      key={link}
                    />
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </DrawerContent>
    </Drawer>
  )
}
