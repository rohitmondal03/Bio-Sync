import Image from 'next/image';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaDev, FaDiscord, FaGithub, FaHashnode, FaLinkedin, FaMedium, FaTwitter, FaUser, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { type IconType } from 'react-icons';

import type { TUserBio } from 'types'
import { PersonalLinkMockup } from '@/components/personal-link-mockup';
import classNames from 'classnames';

import { SocialLinkMockup } from '@/components/social-link-mockup';
import { ProjectLinksMockup } from '@/components/projects-links-mockup';


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
    <section className='space-y-16 sm:space-y-24 md:space-y-32'>
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
              link={portfolioLink}
              className='border border-zinc-500 p-1 rounded-lg shadow-md'
            />

            {portfolioLink &&
              <PersonalLinkMockup
                Icon={FaUser as IconType}
                label={portfolioLink}
                link={portfolioLink}
                className='border border-zinc-500 p-1 rounded-lg shadow-md'
              />
            }
          </div>
        </div>
      </div>


      <div className='w-fit sm:w-[40rem] space-y-5 mx-auto'>
        <h1 className='text-2xl text-center underline text-muted-foreground font-bold'>
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
