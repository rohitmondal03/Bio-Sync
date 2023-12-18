"use server"

import { db } from "@/server/db";


export async function submitUserBio(data: TUserBio) {
  await db.userBio.create({
    data: {
      bio: data.bio,
      email: data.email,
      name: data.name,
      githubLink: data.githubLink,
      portfolioLink: data.portfolioLink,
      twitterLink: data.twitterLink,
      linkedinLink: data.linkedinLink,
      otherLinks: data.otherLinks,
      includeProfilePicOrNot:data.includeProfilePicOrNot,
    }
  })
}