import { type NextRequest, NextResponse } from "next/server";

import { db } from "@/server/db";


type TReq = {
  bioSyncId: string
}


export async function POST(req: NextRequest) {
  const body= await req.json();

  const { uid } = body;

  const bioSyncDetails = await db.userBio.findFirst({
    where: {
      uid: uid,
    }
  });

  return NextResponse.json(bioSyncDetails)
}