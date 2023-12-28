"use server"

import { revalidatePath } from "next/cache"

import { db } from "@/server/db"


export async function deleteBioSync(id: string) {
  await db.userBio.delete({
    where: {
      id: id,
    },
  })

  revalidatePath("/profile")
}