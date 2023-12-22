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
  displayProfile: boolean,
  portfolioLink: string
  profilePicLink: string
  githubUsername: string
  linkedinUsername: string
  twitterUsername: string
  youtubeUsername: string
  discordUsername: string
  hashnodeUsername: string,
  mediumUsername: string,
  devdotToUsername: string,
  whatsAppNumber: string,
  projectLinks: string[],
  // bgCode: string | null,
} 