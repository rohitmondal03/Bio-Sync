import { db } from "@/server/db";
import GlobalLoadingState from "@/app/loading";
import ViewBioSync from "./_components/view-bio-sync";


type TProps = {
  params: {
    slug: string;
  }
}


export default async function Page({ params }: TProps) {
  const { slug } = params;

  const biosync = await db.userBio.findFirst({
    where: {
      bioId: slug
    }
  })


  if (!biosync) {
    return (
      <GlobalLoadingState />
    )
  }


  return <ViewBioSync bioSyncDetails={biosync} />
}


export async function generateStaticParams() {
  const data = await db.userBio.findMany();

  return data.map((item) => ({
    slug: item.bioId,
  }))
}