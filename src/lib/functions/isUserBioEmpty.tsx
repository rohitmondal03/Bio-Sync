import { useData } from "@/hooks/useBioData";

export function isUserBioEmpty() {
  const { data: userBioData } = useData();

  const {
    whatsAppNumber,
    githubUsername,
    linkedinUsername,
    twitterUsername,
    youtubeUsername,
    discordUsername,
    name,
    bio,
    email,
    portfolioLink,
    displayProfile,
    projectLinks,
  } = userBioData;


  return (
    !name &&
    !bio &&
    !email &&
    !whatsAppNumber &&
    !portfolioLink &&
    !displayProfile &&
    !githubUsername &&
    !linkedinUsername &&
    !twitterUsername &&
    !discordUsername &&
    !youtubeUsername &&
    projectLinks.length < 1
  )
}