import type { ILayout } from 'types'
import { dynamicMetadataForProfilePage } from '@/lib/config/metadata.config'


export const generateMetadata= async () => dynamicMetadataForProfilePage()


export default function ProfileLayout(
  { children }: ILayout
) {
  return (
    <main>
      {children}
    </main>
  )
}
