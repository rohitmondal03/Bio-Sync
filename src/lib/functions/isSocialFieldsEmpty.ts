import { useData } from "@/hooks/useBioData";


export function isSocialFieldsEmpty() {
  const { data: userBioData } = useData();

  const {
    whatsAppNumber,
    githubUsername,
    linkedinUsername,
    twitterUsername,
    youtubeUsername,
    discordUsername,
    devdotToUsername,
    hashnodeUsername,
    mediumUsername,
  } = userBioData;

  return (
    !whatsAppNumber &&
    !githubUsername &&
    !linkedinUsername &&
    !twitterUsername &&
    !youtubeUsername &&
    !discordUsername &&
    !devdotToUsername &&
    !hashnodeUsername &&
    !mediumUsername
  )
}