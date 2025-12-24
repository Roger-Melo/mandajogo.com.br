import { GameCard } from "@/components/game-card"
import { topDesiredGames } from "@/db/game/top-desired-games"
import { GameDetailsPage } from "@/types"

export function Aside({ game }: { game: GameDetailsPage }) {
  return (
    <aside className="space-y-6 md:px-6 lg:px-0">
      <div className="space-y-2">
        <h3 className="text-lg text-slate-400">Vídeo Promocional</h3>
        <iframe className="aspect-video w-full" src={`https://www.youtube.com/embed/${game.urlVideo}`} allowFullScreen />
      </div>
      <div className="hidden lg:block lg:space-y-2">
        <h3 className="text-lg text-slate-400">Jogos Similares</h3>
        <ul className="grid grid-cols-3 gap-2">
          {topDesiredGames
            .filter((filteredGame) => filteredGame.title !== game.title)
            .map((game) => <GameCard cardType="similarGame" key={game.id} game={game} />)
          }
        </ul>
      </div>
    </aside>
  )
}
