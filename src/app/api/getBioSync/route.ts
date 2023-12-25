import { type NextRequest, NextResponse } from "next/server";

import { db } from "@/server/db";


export async function POST(req: NextRequest) {
  const body: { bioSyncId: string } = await req.json();

  const { bioSyncId } = body;

  const bioSyncDetails = await db.userBio.findFirst({
    where: {
      id: bioSyncId,
    }
  });

  return NextResponse.json(bioSyncDetails)
}