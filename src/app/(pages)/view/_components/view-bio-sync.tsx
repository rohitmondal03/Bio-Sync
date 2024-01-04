import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
import classNames from 'classnames';
import { type IconType } from 'react-icons';
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

import type { TUserBio } from 'types'
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
import { inter } from '@/lib/fonts';

const PersonalLinkMockup = dynamic(() => import("@/components/mockup/personal-link-mockup").then((mod) => mod.PersonalLinkMockup))
const SocialLinkMockup = dynamic(() => import("@/components/mockup/social-link-mockup").then((mod) => mod.SocialLinkMockup))
const ProjectLinksMockup = dynamic(() => import("@/components/mockup/projects-links-mockup").then((mod) => mod.ProjectLinksMockup))




type TProps = {
  bioSyncDetails: TUserBio
}


const PERSONAL_LINKS_CLASSES = {
  "shadow-[2px_2px_0px]": true,
  'border border-zinc-500 rounded-lg': true,
  "p-1": true,
  "hover:scale-100 transition ease-out hover:shadow-[5px_5px_0]": true,
}


export default function ViewBioSync(
  { bioSyncDetails }: TProps
) {
  const {
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
  } = bioSyncDetails;


  return (
    <section className={classNames(`${inter.className}`, {
        "px-2 md:px-20 lg:px-24 py-10 md:py-16": true,
        "space-y-16 sm:space-y-24": true,
    })}>
      <div className={classNames({
        'flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12 lg:gap-32': true,
      })}>
        {displayProfile &&
          <Image
            src={profilePicLink}
            alt='profile pic'
            height={300}
            width={300}
            className='scale-75 sm:scale-90 md:scale-100 rounded-2xl'
          />
        }


        <div className='space-y-6 sm:space-y-10'>
          <h1 className='font-bold text-center sm:text-left text-3xl sm:text-5xl'>
            <span className='text-muted-foreground text-center text-xl sm:text-2xl'>MySelf,</span> <br />
            {name}
          </h1>

          <div className='space-y-2'>
            <PersonalLinkMockup
              Icon={AiOutlineMail as IconType}
              label={email}
              link={"mailto:"+email}
              className={classNames(PERSONAL_LINKS_CLASSES)}
            />

            {portfolioLink &&
              <PersonalLinkMockup
                Icon={FaUser as IconType}
                label={portfolioLink}
                link={portfolioLink}
                className={classNames(PERSONAL_LINKS_CLASSES)}
              />
            }
          </div>
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


      <div className='mx-auto flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20'>
        <h1 className='text-2xl text-center font-bold text-zinc-700'>
          Connect w/ me...
        </h1>

        <div className={classNames({
          "grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 items-center justify-center": true,
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
