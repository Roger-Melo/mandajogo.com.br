import { OwnersList } from "@/components/game-page/owners-list"
import { Game } from "@/types"

type OwnersSectionProps = {
  ownersPage: number
  platform: string
  slug: string
  game: Game
}

export function OwnersSection({ ownersPage = 1, platform, slug, game }: OwnersSectionProps) {
  return (
    <section className="space-y-2 lg:col-span-2 lg:mt-6">
      <h3 className="text-lg text-slate-400">Proprietários</h3>{/* Interessados | Ficha Técnica */}
      <OwnersList game={game} ownersPage={ownersPage} platform={platform} slug={slug} />
    </section>
  )
}
