interface ILayout {
  children: ReactNode
}

type TUserBio = {
  name: string
  email: string
  bio: string
  profilePic: string;
  githubLink: string
  linkedinLink: string
  twitterLink: string
  portfolioLink: string
  projectLinks: string[]
  includeProfilePicOrNot: boolean
}