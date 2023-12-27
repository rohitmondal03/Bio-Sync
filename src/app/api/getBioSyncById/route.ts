import { type NextRequest, NextResponse } from "next/server";

import { db } from "@/server/db";


type TReq= {
  bid: string
}


export async function POST(req: NextRequest) {
  const body= await req.json() as TReq;   // eslint-disable-line no-use-before-define

  const { bid } = body;

  const bioSyncDetails = await db.userBio.findFirst({
    where: {
      bioId: bid,
    }
  });

  return NextResponse.json(bioSyncDetails)
}