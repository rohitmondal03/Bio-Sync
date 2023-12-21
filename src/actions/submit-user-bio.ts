"use server"

import { db } from "@/server/db";
import { redirect } from "next/navigation";
import type { TUserBio } from "types";


export async function submitUserBio(data: TUserBio) {
  await db.userBio.create({
    data: data
  })

  redirect("/dashboard")
}