import { NextRequest, NextResponse } from "next/server";

import { db } from "@/server/db";


export async function GET() {
  // const body = await req.json();

  // const { userId } = body;

  const bioSyncDetails = await db.user.findMany();

  return NextResponse.json(bioSyncDetails)
}