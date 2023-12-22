import { UserBio } from "@prisma/client"
import { ReactNode } from "react"

interface ILayout {
  children: ReactNode
}

type TBackgroundOptions = {
  code: string,
  BackGround: JSX.Element,
  label: string,
}

type TUserBio = {
  name: string
  email: string
  bio: string
  profilePicLink: string
  githubLink: string
  linkedinLink: string
  twitterLink: string
  portfolioLink: string
  youtubeLink: string
  discordLink: string
  hashnodeLink: string,
  mediumLink: string,
  devdotToLink: string,
  projectLinks: string[],
  displayProfile: boolean,
  // bgCode: string | null,
} 