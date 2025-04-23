import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const games = [
  { title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { title: "Spider-Man 2", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { title: "Stellar Blade", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
]

function GameBadge ({ text }) {
  return <Badge className="bg-white/10 text-white/80 ml-0.5">{text}</Badge>
}

function GameCard ({ title, platform, desired, offered, rating, cover }) {
  const badgeTexts = [platform, `${desired} desejos`, `${offered} ofertas`, `Nota ${rating}`]
  return (
    <li className="border-2 rounded-2xl border-white/20 p-4">
      <img src={cover} alt={title} />
      <h3 className="text-3xl uppercase font-semibold my-4">{title}</h3>
      <div className="flex justify-between items-end">
        <ul className="max-w-48">
          {badgeTexts.map((text) => <GameBadge key={text} text={text} />)}
        </ul>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" className="bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10">
                <MoveRight />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ver jogo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  )
}

export function TopDesiredGames () {
  return (
    <section className="px-4 py-8 bg-slate-950 lg:py-16">
      <h2 className="font-bold uppercase text-primary-blue mb-6">Os mais desejados</h2>
      <ul className="flex flex-col gap-4">
        {games.map((game) => (
          <GameCard
            key={game.title}
            title={game.title}
            platform={game.platform}
            desired={game.desired}
            offered={game.offered}
            rating={game.rating}
            cover={game.cover}
          />
        ))}
      </ul>
    </section>
  )
}
