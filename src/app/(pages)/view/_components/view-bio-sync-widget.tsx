import Image from 'next/image';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaDev, FaDiscord, FaGithub, FaHashnode, FaLinkedin, FaMedium, FaTwitter, FaUser, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { type IconType } from 'react-icons';

import type { TUserBio } from 'types'
import { PersonalLinkMockup } from '@/components/personal-link-mockup';
import classNames from 'classnames';

import { SocialLinkMockup } from '@/components/social-link-mockup';


type TProps = {
  bioSyncDetails: TUserBio
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
    <section className='space-y-28'>
      <div className='flex flex-row items-center justify-center gap-32'>
        {displayProfile &&
          <Image
            src={profilePicLink}
            alt='profile pic'
            height={300}
            width={300}
            className='rounded-2xl'
          />
        }


        <div className='space-y-10'>
          <h1 className='font-bold text-left text-5xl'>
            <span className='text-muted-foreground text-2xl'>MySelf,</span> <br />
            {name}
          </h1>

          <div className='space-y-2'>
            <PersonalLinkMockup
              Icon={AiOutlineMail as IconType}
              label={email}
              link={portfolioLink}
            />

            {portfolioLink &&
              <PersonalLinkMockup
                Icon={FaUser as IconType}
                label={portfolioLink}
                link={portfolioLink}
              />
            }
          </div>
        </div>
      </div>


      <div className='w-[40rem] space-y-2 mx-auto'>
        <h1 className='text-2xl text-muted-foreground font-bold'>About {name},</h1>
        <p>{bio}</p>
      </div>


      <div className='mx-auto flex flex-row items-center justify-center gap-x-20'>
        <h1 className='text-2xl text-center font-bold text-muted-foreground'>Connect w/ me...</h1>

        <div className={classNames({
          "grid grid-cols-3 gap-2 items-center justify-center": true,
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
    </section>
  )
}
