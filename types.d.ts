import { UserBio } from "@prisma/client"

interface ILayout {
  children: ReactNode
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
  projectLinks: string[]
  displayProfile: boolean
} 