import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

const games = [
  { title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { title: "Spider-Man 2", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { title: "Stellar Blade", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
  { title: "Astro Bot 2", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { title: "Spider-Man 3", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { title: "Stellar Blade 2", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
  { title: "Astro Bot 3", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { title: "Spider-Man 4", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { title: "Stellar Blade 3", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
]

function GameBadge ({ text }) {
  return <Badge className="bg-white/10 text-white/80 ml-0.5">{text}</Badge>
}

function GameCard ({ title, platform, desired, offered, rating, cover }) {
  const badgeTexts = [platform, `${desired} desejos`, `${offered} ofertas`, `Nota ${rating}`]
  const gamePageLink = "#"
  return (
    <li className="w-full gap-4 sm:w-[calc(50%-0.5rem)] border-2 rounded-2xl border-white/20 p-4 flex flex-col lg:w-[calc(33%-0.5rem)]">
      {/* image */}
      <Link href={gamePageLink} className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={cover} alt={title} className="mx-auto w-full h-auto" />
      </Link>

      <div className="ssm:flex ssm:flex-col ssm:justify-between ssm:w-full sm:h-full">
        {/* title */}
        <Link href={gamePageLink}>
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center">{title}</h3>
        </Link>

        {/* bottom container */}
        <div className="flex justify-between items-center gap-4 ssm:items-end">
          {/* badges list */}
          <ul>
            {badgeTexts.map((text) => <GameBadge key={text} text={text} />)}
          </ul>

          {/* link game page */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild size="icon" className="bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10">
                  <Link href={gamePageLink}>
                    <MoveRight />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver jogo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </li>
  )
}

export function TopDesiredGames () {
  return (
    <section className="px-4 py-8 bg-slate-950 lg:py-16 md:max-w-[1120px] md:mx-auto">
      <h2 className="font-bold uppercase text-primary-blue mb-6">Os mais desejados</h2>
      <ul className="sm:flex sm:flex-wrap sm:gap-4">
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
