"use server"

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import UuidGenerator from "uuid-wand"

import type { TUserBio } from "types";
import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";


export async function submitUserBio(bioData: TUserBio) {
  const sesssionDetails = await getServerAuthSession();
  const userId = sesssionDetails?.user.id;

  const uuid = UuidGenerator.shortUuid();


  await db.userBio.create({
    data: {
      ...bioData,
      userId: userId,
      bioId: uuid,
    }
  })

  revalidatePath("/view/" + uuid);
  redirect("/view/" + uuid);
}