import { GameCard } from "@/components/game-card"
import { NewReleaseGame } from "@/types"

export function SectionNewReleases ({ games }: { games: NewReleaseGame[] }) {
  return (
    <section className="px-4 py-8 bg-primary-yellow lg:py-16">
      <div className="md:max-w-site-width md:mx-auto">
        <h2 className="font-bold uppercase text-primary-blue mb-6">Lançamentos</h2>
        <ul className="space-y-4 gap-4 columns-1 sm:columns-2 lg:columns-3">
          {games.map((game) => <GameCard key={game.id} cardType="newReleaseGame" game={game} />)}
        </ul>
      </div>
    </section>
  )
}
