import { GameCard } from "@/components/game-card"

export function SectionNewReleases ({ games }) {
  return (
    <section className="px-4 py-8 bg-primary-yellow lg:py-16">
      <div className="md:max-w-[1120px] md:mx-auto">
        <h2 className="font-bold uppercase text-primary-blue mb-6">Lançamentos</h2>
        <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-4">
          {games.map((game) => <GameCard key={game.id} cardType="newReleaseGame" game={game} />)}
        </ul>
      </div>
    </section>
  )
}
