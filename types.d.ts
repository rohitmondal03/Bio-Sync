interface ILayout {
  children: ReactNode
}

type TOtherLinks = {
  label: string;
  link: string;
}

type TUserBio = {
  name: string
  email: string
  bio: string
  githubLink: string
  linkedinLink: string
  twitterLink: string
  portfolioLink: string
  otherLinks: TOtherLinks[]
}