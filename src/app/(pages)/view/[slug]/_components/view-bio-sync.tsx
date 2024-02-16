"use client"

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import classNames from 'classnames';
import type { UserBio } from '@prisma/client';
import { Copy } from 'lucide-react';
import { type IconType, } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';
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
  FaYoutube,
} from 'react-icons/fa6';

import { inter } from '@/lib/fonts';
import { WEBSITE_LINK } from '@/lib/config/website-details.config';
import { Button } from '@/components/ui/button';
import {
  DEVDOTTO_CONST,
  DISCORD_CONST,
  GITHUB_CONST,
  HASHNODE_CONST,
  LINKEDIN_CONST,
  MEDIUM_CONST,
  TWITTER_CONST,
  WHATSAPP_CONST,
  YOUTUBE_CONST,
} from '@/lib/constants/social-links-skeleton';
import { Separator } from '@/components/ui/separator';

const SkillsMockup = dynamic(() => import('@/components/mockup/skills-mockup').then((mod) => mod.SkillsMockup))
const PersonalLinkMockup = dynamic(() => import("@/components/mockup/personal-link-mockup").then((mod) => mod.PersonalLinkMockup))
const ProjectLinksMockup = dynamic(() => import("@/components/mockup/projects-links-mockup").then((mod) => mod.ProjectLinksMockup))



type TProps = {
  bioSyncDetails: UserBio
}


type TSocialLinkMockup = {
  href: string;
  Icon: IconType;
}


const PERSONAL_LINKS_CLASSES = {
  "shadow-[2px_2px_0px]": true,
  'border border-zinc-500 rounded-lg': true,
  "p-1": true,
  "hover:scale-100 transition ease-out hover:shadow-[5px_5px_0]": true,
}


export default async function ViewBioSync(
  { bioSyncDetails }: TProps
) {
  const {
    bioId,
    displayProfile,
    profilePicLink,
    name,
    email,
    bio,
    devdotToUsername,
    discordUsername,
    githubUsername,
    hashnodeUsername,
    linkedinUsername,
    mediumUsername,
    portfolioLink,
    whatsAppNumber,
    twitterUsername,
    youtubeUsername,
    projectLinks,
    skills,
  } = bioSyncDetails;


  // COPY LINK BUTTON FUNCTION
  async function copyLink() {
    await navigator.clipboard.writeText(WEBSITE_LINK + "/view/" + bioId);
  }


  return (
    <section className={classNames(`${inter.className}`, {
      "px-2 md:px-20 lg:px-24 py-10 md:py-16": true,
      "space-y-16 sm:space-y-24": true,
    })}>
      <div className='space-y-10'>
        <div className={classNames({
          'flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12 lg:gap-32': true,
        })}>
          {displayProfile &&
            <Image
              src={profilePicLink}
              alt='profile pic'
              height={300}
              width={300}
              className={classNames({
                'scale-75 sm:scale-90 md:scale-100': true,
                "rounded-2xl": true,
              })}
              loading='lazy'
              placeholder='blur'
              blurDataURL={"/web_main_img.svg"}
            />
          }

          <div className='space-y-6 sm:space-y-8'>
            <h1 className='font-bold text-center sm:text-left text-3xl sm:text-5xl'>
              <span className='text-muted-foreground text-center text-xl sm:text-2xl'>MySelf,</span> <br />
              {name}
            </h1>

            <Button
              size={'sm'}
              variant={'default'}
              onClick={copyLink}
            >
              Copy Link <Copy className='icon' />
            </Button>

            <div className='space-y-2'>
              <PersonalLinkMockup
                Icon={AiOutlineMail as IconType}
                link={"mailto:" + email}
                className={classNames(PERSONAL_LINKS_CLASSES)}
                label={email}
              />

              {portfolioLink &&
                <PersonalLinkMockup
                  Icon={FaUser as IconType}
                  link={portfolioLink}
                  className={classNames(PERSONAL_LINKS_CLASSES)}
                  label={portfolioLink}
                />
              }
            </div>
          </div>
        </div>

        <Separator className='h-2 rounded-md bg-zinc-300' />

        <div className={classNames({
          "flex flex-grow flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 items-center justify-center": true,
        })}>
          {whatsAppNumber && (
            <SocialLinkMockup
              href={WHATSAPP_CONST + whatsAppNumber}
              Icon={FaWhatsapp as IconType}
            />
          )}

          {linkedinUsername &&
            <SocialLinkMockup
              href={LINKEDIN_CONST + linkedinUsername}
              Icon={FaLinkedin as IconType}
            />
          }

          {twitterUsername &&
            <SocialLinkMockup
              href={TWITTER_CONST + twitterUsername}
              Icon={FaTwitter as IconType}
            />
          }

          {githubUsername &&
            <SocialLinkMockup
              href={GITHUB_CONST + githubUsername}
              Icon={FaGithub as IconType}
            />
          }

          {discordUsername &&
            <SocialLinkMockup
              href={DISCORD_CONST + discordUsername}
              Icon={FaDiscord as IconType}
            />
          }

          {mediumUsername && (
            <SocialLinkMockup
              href={MEDIUM_CONST + mediumUsername}
              Icon={FaMedium as IconType}
            />
          )}

          {hashnodeUsername && (
            <SocialLinkMockup
              Icon={FaHashnode as IconType}
              href={HASHNODE_CONST + hashnodeUsername}
            />
          )}

          {devdotToUsername && (
            <SocialLinkMockup
              Icon={FaDev as IconType}
              href={DEVDOTTO_CONST + devdotToUsername}
            />
          )}

          {youtubeUsername &&
            <SocialLinkMockup
              href={YOUTUBE_CONST + youtubeUsername}
              Icon={FaYoutube as IconType}
            />
          }
        </div>
      </div>



      <div className={classNames({
        'sm:w-[40rem] mx-auto': true,
        "w-fit": true,
        "p-4 rounded-xl": true,
        "space-y-5": true,
        "shadow-[10px_10px_0]": true,
        "border border-zinc-600": true,
      })}>
        <h1 className='text-2xl text-left underline text-zinc-600 font-bold'>
          About {name},
        </h1>

        <p className='sm:text-lg'>{bio}</p>
      </div>


      <div className='mx-auto space-y-8'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold underline'>
          Skills
        </h1>

        <div className={classNames({
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4': true,
        })}>
          {skills.map(((skill, idx) => (
            <SkillsMockup
              idx={idx}
              skill={skill}
              key={idx}
            />
          )))}
        </div>
      </div>


      <div className='mx-auto space-y-8'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold underline'>Projects Links</h1>

        <div className={classNames({
          'flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4': true,
        })}>
          {projectLinks.map(((link, idx) => (
            <ProjectLinksMockup
              idx={idx}
              link={link}
              key={idx}
            />
          )))}
        </div>
      </div>
    </section>
  )
}


// COMPONENT FOR SOCIAL LINKS

export function SocialLinkMockup(
  { href, Icon }: TSocialLinkMockup
) {
  return (
    <Link
      href={href}
      className={classNames({
        "border border-zinc-400 rounded-full": true,
        "p-3": true,
        "bg-zinc-200": true,
        "shadow-[3px_3px_0]": true,
        "hover:scale-105 hover:rounded-lg hover:bg-rose-200 hover:border-black": true,
        "duration-200 transition ease": true,
      })}
      target="_blank"
    >
      <Icon fill="black" className='scale-125' />
    </Link>
  )
}