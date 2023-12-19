"use server"

import { db } from "@/server/db";
import { redirect } from "next/navigation";


export async function submitUserBio(data: TUserBio) {
  await db.userBio.create({
    data: data
  })

  redirect("/dashboard")
}