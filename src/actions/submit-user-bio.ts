"use server"

import { redirect } from "next/navigation";
import UuidGenerator from "uuid-wand"

import type { TUserBio } from "types";
import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";


export async function submitUserBio(bioData: TUserBio) {
  const sesssionDetails = await getServerAuthSession();
  const userId = sesssionDetails?.user.id;

  const uuid= UuidGenerator.v1();


  await db.userBio.create({
    data: {
      ...bioData,
      userId: userId,
      uid: uuid,
    }
  })

  redirect("/view?id="+uuid)
}