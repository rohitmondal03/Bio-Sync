import { NextRequest, NextResponse } from "next/server";

import { db } from "@/server/db";


export async function POST(req: NextRequest) {
  const body = await req.json();

  const { bioSyncId } = body;

  const bioSyncDetails = db.userBio.findFirst({
    where: {
      id: String(bioSyncId)
    }
  })

  console.log(bioSyncDetails)
  return NextResponse.json(bioSyncDetails)
}