import { type IconType } from "react-icons";
import { AiFillMail } from "react-icons/ai"
import {
  FaYoutube,
  FaUser,
  FaTextHeight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLink,
  FaDiscord,
  FaHashnode,
  FaDev,
  FaMedium
} from "react-icons/fa6"

import type { TUserBio } from "types";


type TInputDetailProps = {
  label: string;
  id: keyof TUserBio;
  placeholder: string;
  inputType: "Input" | "Textarea";
  icon: IconType,
}


const IF_ANY = "(if any)"

const COMMON_DETAIL = (input: string) => {
  return `Enter your ${input} link`
}


export const INPUT_FIELDS_DETAILS: TInputDetailProps[] = [
  {
    id: "name",
    inputType: "Input",
    label: "Enter your name",
    placeholder: "e.g. John Doe",
    icon: FaUser as IconType,
  },
  {
    id: "email",
    inputType: "Input",
    label: "Enter your email",
    placeholder: "e.g. johndoe1234@gmail.com",
    icon: AiFillMail as IconType,
  },
  {
    id: "bio",
    inputType: "Textarea",
    label: "Write something about you",
    placeholder: "e.g. I'm a software engineer having 10+year of experience and.....",
    icon: FaTextHeight as IconType,
  },
  {
    id: "portfolioLink",
    inputType: "Input",
    label: COMMON_DETAIL("Portfolio") + " " + IF_ANY,
    placeholder: "e.g. https://portfolio-ten-virid-46.vercel.app/",
    icon: FaLink as IconType,
  },
  {
    id: "githubLink",
    inputType: "Input",
    label: COMMON_DETAIL("GitHub") + " " + IF_ANY,
    placeholder: "e.g. https://github.com/username",
    icon: FaGithub as IconType,
  },
  {
    id: "linkedinLink",
    inputType: "Input",
    label: COMMON_DETAIL("LinkedIn") + " " + IF_ANY,
    placeholder: "e.g. https://www.linkedin.com/in/username",
    icon: FaLinkedin as IconType,
  },
  {
    id: "twitterLink",
    inputType: "Input",
    label: COMMON_DETAIL("Twitter") + " " + IF_ANY,
    placeholder: "e.g. https://twitter.com/username",
    icon: FaTwitter as IconType,
  },
  {
    id: "discordLink",
    inputType: "Input",
    label: COMMON_DETAIL("Discord") + " " + IF_ANY,
    placeholder: "e.g. https://discord.com/users/username",
    icon: FaDiscord as IconType,
  },
  {
    id: "hashnodeLink",
    inputType: "Input",
    label: COMMON_DETAIL("Hashnode") + " " + IF_ANY,
    placeholder: "e.g. https://hashnode.com/@username",
    icon: FaHashnode as IconType,
  },
  {
    id: "devdotToLink",
    inputType: "Input",
    label: COMMON_DETAIL("Dev") + " " + IF_ANY,
    placeholder: "e.g. https://dev.to/yourusername",
    icon: FaDev as IconType,
  },
  {
    id: "mediumLink",
    inputType: "Input",
    label: COMMON_DETAIL("Medium") + " " + IF_ANY,
    placeholder: "e.g. https://medium.com/@rohitmondall8000",
    icon: FaMedium as IconType,
  },
  {
    id: "youtubeLink",
    inputType: "Input",
    label: COMMON_DETAIL("Youtube") + " " + IF_ANY,
    placeholder: "e.g. https://www.youtube.com/@username",
    icon: FaYoutube as IconType,
  },
]
