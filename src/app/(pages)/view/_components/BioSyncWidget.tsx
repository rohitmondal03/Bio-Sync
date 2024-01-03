"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import type { TUserBio } from "types";
import BioSyncNotFound from "./not-found-bio-sync";
import ViewBioSync from "./view-bio-sync";
import GlobalLoadingState from "@/app/loading";


export default function BioSyncViewWidget() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TUserBio>();
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
        .then((data: TUserBio) => setData(data))

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
