import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PlatformsList } from "@/components/platforms-list"
import { BaseTooltip } from "@/components/base-tooltip"
import type { NewReleaseGame, TopDesiredGame, TopOfferedGame } from "@/types"

type GameCardProps = 
  | { cardType: "topGame"; game: TopDesiredGame | TopOfferedGame }
  | { cardType: "newReleaseGame"; game: NewReleaseGame }
  | { cardType: "similarGame"; game: TopDesiredGame }

export function GameCard ({ cardType, game }: GameCardProps) {
  const pageLink = cardType === "topGame" || cardType === "similarGame" 
    ? `/game/${game.platform.slug}/${game.slug}`
    : `/game/${game.platforms[0].slug}/${game.slug}`

  const platformSlug = cardType === "topGame" || cardType === "similarGame"
    ? game.platform.slug
    : game.platforms[0].slug
  const imgSrc = `/covers/${platformSlug}/${game.imageCover}`

  return (
    <li className={cn("break-inside-avoid mb-4 w-full border-2 rounded-2xl border-white/20 p-4 flex flex-col gap-4", cardType === "newReleaseGame" ? "border-primary-blue h-fit" : cardType === "similarGame" ? "mb-0 p-3 gap-2 rounded-xl" : "")}>
      <Link href={pageLink} className={cn("xsm:flex-shrink-0 sm:mx-auto", { "xsm:w-[183px]": cardType !== "similarGame" })}>
        <Image width={236} height={294} src={imgSrc} alt={game.title} className="mx-auto w-full h-auto" />
      </Link>
      <div className={cn("xsm:flex xsm:flex-col xsm:w-full sm:h-full", cardType === "newReleaseGame" ? "" : "xsm:justify-between")}>
        <Link href={pageLink}>
          <h3 className={cn("wrap-anywhere text-3xl text-center uppercase font-semibold mt-0 mb-4 xsm:text-left sm:text-center", cardType === "newReleaseGame" ? "text-primary-blue" : cardType === "similarGame" ? "text-xs mb-0 text-slate-400" : "")}>{game.title}</h3>
        </Link>
        <div className={cn("flex justify-between items-center gap-4 xsm:items-end", { "flex-col": cardType === "newReleaseGame" })}>
          {cardType === "newReleaseGame" && (
            <>
              <p className="text-primary-blue">{game.description}</p>
              <PlatformsList data={game} tooltipText="Ver jogo" logosWidth="w-20" linksType="game" />
            </>
          )}
          {cardType === "topGame" && (
            <>
              {/* GameBadgesList */}
              <ul>
                {[game.platform.name, `${game.wishes} desejos`, `${game.offers} ofertas`, `Nota ${game.rating}`].map((text, index) => <Badge key={index} className="bg-white/10 text-white/80 ml-0.5">{text}</Badge>)}
              </ul>
              {/* GamePageButton */}
              <BaseTooltip text="Ver jogo">
              <Button asChild size="icon" className={cn("bg-transparent border-primary-blue border-2 hover:bg-transparent hover:cursor-pointer hover:border-primary-blue")}>
                <Link href={pageLink}>
                  <MoveRight className="text-primary-blue" />
                </Link>
              </Button>
            </BaseTooltip>
            </>
          )}
        </div>
      </div>
    </li >
  )
}
