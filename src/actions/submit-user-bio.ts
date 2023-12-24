"use server"

import { redirect } from "next/navigation";

import type { TUserBio } from "types";
import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";


export async function submitUserBio(bioData: TUserBio) {
  const sesssionDetails = await getServerAuthSession();

  const userId = sesssionDetails?.user.id;


  await db.userBio.create({
    data: {
      ...bioData,
      userId: userId,
    }
  })

  const temp: number = await db.userBio.count();
  console.log(temp);

  redirect("/")
}