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
  FaMedium,
  FaWhatsapp,
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
  return `Enter your ${input} username`
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
    placeholder: "e.g. I'm a software engineer having 10+ years of experience and.....",
    icon: FaTextHeight as IconType,
  },
  {
    id: "portfolioLink",
    inputType: "Input",
    label: "Your Portfolio Link" + " " + IF_ANY,
    placeholder: "e.g. https://portfolio-ten-virid-46.vercel.app/",
    icon: FaLink as IconType,
  },
  {
    id: "githubUsername",
    inputType: "Input",
    label: COMMON_DETAIL("GitHub") + " " + IF_ANY,
    placeholder: "e.g. johndoe@123",
    icon: FaGithub as IconType,
  },
  {
    id: "linkedinUsername",
    inputType: "Input",
    label: COMMON_DETAIL("LinkedIn") + " " + IF_ANY,
    placeholder: "e.g. john-doe-6165",
    icon: FaLinkedin as IconType,
  },
  {
    id: "whatsAppNumber",
    inputType: "Input",
    label: COMMON_DETAIL("WhatsApp") + " " + IF_ANY,
    placeholder: "9630XXXX67",
    icon: FaWhatsapp as IconType,
  },
  {
    id: "twitterUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Twitter") + " " + IF_ANY,
    placeholder: "e.g. JohnD65744224",
    icon: FaTwitter as IconType,
  },
  {
    id: "discordUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Discord") + " " + IF_ANY,
    placeholder: "e.g. johnd_05",
    icon: FaDiscord as IconType,
  },
  {
    id: "hashnodeUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Hashnode") + " " + IF_ANY,
    placeholder: "e.g. @johndoe",
    icon: FaHashnode as IconType,
  },
  {
    id: "devdotToUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Dev") + " " + IF_ANY,
    placeholder: "e.g. yourusername",
    icon: FaDev as IconType,
  },
  {
    id: "mediumUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Medium") + " " + IF_ANY,
    placeholder: "e.g. @johndoe8000",
    icon: FaMedium as IconType,
  },
  {
    id: "youtubeUsername",
    inputType: "Input",
    label: COMMON_DETAIL("Youtube") + " " + IF_ANY,
    placeholder: "e.g. @JohnDoe",
    icon: FaYoutube as IconType,
  },
]
