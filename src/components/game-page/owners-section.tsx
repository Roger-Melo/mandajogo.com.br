import { OwnersList } from "@/components/game-page/owners-list"

type OwnersSectionProps = {
  ownersPage: number
  platform: string
  slug: string
}

export function OwnersSection({ ownersPage = 1, platform, slug }: OwnersSectionProps) {
  return (
    <section className="space-y-2 lg:col-span-2 lg:mt-6">
      <h3 className="text-lg text-slate-400">Proprietários</h3>{/* Interessados | Ficha Técnica */}
      <OwnersList ownersPage={ownersPage} platform={platform} slug={slug} />
    </section>
  )
}
