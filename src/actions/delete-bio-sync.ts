"use server"

import { db } from "@/server/db"
import { revalidatePath } from "next/cache"


export async function deleteBioSync(bid: string) {
  await db.userBio.deleteMany({
    where: {
      bioId: bid
    },
  })

  revalidatePath("/profile")
}