import dynamic from "next/dynamic";

const Skeleton = dynamic(() => import("@/components/ui/skeleton").then((mod) => mod.Skeleton))


export default function GlobalLoadingState() {
  return (
    <div className="flex items-center justify-center h-screen space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}