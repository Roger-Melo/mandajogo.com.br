import { GameCard } from "@/components/game-card"

export function SectionTopGames ({ heading, games }) {
  return (
    <section className="px-4 py-8 bg-slate-950 lg:py-16 md:max-w-site-width md:mx-auto">
      <h2 className="font-bold uppercase text-primary-blue mb-6">{heading}</h2>
      <ul className="space-y-4 gap-4 columns-1 sm:columns-2 lg:columns-3">
        {games.map((game) => <GameCard key={game.id} cardType="topGame" game={game} />)}
      </ul>
    </section>
  )
}
