import type { TUserBio } from "types";


export const INITIAL_DATA: TUserBio = {
  name: "",
  email: "",
  bio: "",
  displayProfile: false,
  profilePicLink: "",
  githubUsername: "",
  whatsAppNumber: "",
  linkedinUsername: "",
  portfolioLink: "",
  discordUsername: "",
  youtubeUsername: "",
  twitterUsername: "",
  devdotToUsername: "",
  hashnodeUsername: "",
  mediumUsername: "",
  projectLinks: [],
  skills: [],
};

export const DEMO_DATA: TUserBio = {
  name: "Rohit Mondal",
  displayProfile: true,
  profilePicLink: "https://avatars.githubusercontent.com/u/107113353?v=4",
  bio: "I'm a frontend developer having expertise in making user-friendly websites and cross-platform websites using ReactJS. I've expertise in NextJS, TypeScript, Prisma and other popular frameworks and libraries including Tailwind CSS.",
  email: "rohitmondall8000@gmail.com",
  portfolioLink: "https://portfolio-ten-virid-46.vercel.app/",
  whatsAppNumber: "9630216167",
  linkedinUsername: "rohit-mondal-61662a16b",
  githubUsername: "rohitmondal03",
  twitterUsername: "RohitMo62534745",
  youtubeUsername: "@RoadsideCoder",
  discordUsername: "rohitm_2003",
  devdotToUsername: "rohitmondal03",
  hashnodeUsername: "@rohitmondall8000",
  mediumUsername: "@rohitmondall8000",
  projectLinks: ["https://opentyped-nextjs.vercel.app/", "https://imagewall.vercel.app/"],
  skills: ["JavsScript", "TypeScript", "ReactJS", "NextJS", "Prisma", "Working with APIs and serverless Databases."]
}