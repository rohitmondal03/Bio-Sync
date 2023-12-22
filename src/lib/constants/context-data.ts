import type { TUserBio } from "types";


export const INITIAL_DATA: TUserBio = {
  name: "",
  email: "",
  bio: "",
  profilePicLink: "",
  githubLink: "",
  displayProfile: false,
  linkedinLink: "",
  portfolioLink: "",
  discordLink: "",
  youtubeLink: "",
  twitterLink: "",
  devdotToLink: "",
  hashnodeLink: "",
  mediumLink: "",
  projectLinks: [],
  // bgCode: null,
};

export const DEMO_DATA: TUserBio = {
  name: "Rohit Mondal",
  displayProfile: true,
  profilePicLink: "https://avatars.githubusercontent.com/u/107113353?v=4",
  bio: "I'm a frontend developer having expertise in making user-friendly websites and cross-platform websites using ReactJS. I've expertise in NextJS, TypeScript, Prisma and other popular frameworks and libraries including Tailwind CSS.",
  email: "rohitmondall8000@gmail.com",
  linkedinLink: "https://www.linkedin.com/in/rohit-mondal-61662a16b/",
  githubLink: "https://github.com/rohitmondal03",
  portfolioLink: "https://portfolio-ten-virid-46.vercel.app/",
  twitterLink: "https://twitter.com/RohitMo62534745",
  youtubeLink: "https://www.youtube.com/@RoadsideCoder",
  discordLink: "https://discord.com/users/rohitm_2003",
  devdotToLink: "https://dev.to/karanpratapsingh",
  hashnodeLink: "https://hashnode.com/@rohitmondall8000",
  mediumLink: "https://medium.com/@prashant.kumar2_7782",
  projectLinks: ["https://opentyped-nextjs.vercel.app/", "https://imagewall.vercel.app/"],
  // bgCode: "#C9EBFF"
}