"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { UserBio } from "@prisma/client";

import GlobalLoadingState from "@/app/loading";
import BioSyncNotFound from "./not-found-bio-sync";
import ViewBioSync from "./view-bio-sync";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<UserBio>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const bId = searchParams.get("share");


  useEffect(() => {
    async function getBioSyncDetails() {
      setLoading(true);

      await fetch("/api/getBioSyncById", {
        next: {
          revalidate: 3600,
        },
        keepalive: false,
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        cache: "no-store",
        body: JSON.stringify({ bid: bId }),
      })
        .then((resp) => resp.json())
        .then((data: UserBio) => setData(data))

      setLoading(false);
    }

    getBioSyncDetails().catch((err: Error) => console.log(err));
  }, [])


  if (isLoading) {
    return <GlobalLoadingState />
  }


  return bId ? (
    <div>
      {data ?
        <ViewBioSync bioSyncDetails={data} />
        :
        <BioSyncNotFound />
      }
    </div>
  ) : (
    notFound()
  )
}
