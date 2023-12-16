import { getServerAuthSession } from "@/server/auth";
import { NextResponse } from "next/server";


export async function GET() {
  const session= await getServerAuthSession();

  return NextResponse.json(session?.user);
}