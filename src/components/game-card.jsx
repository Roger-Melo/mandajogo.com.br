import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PlatformsList } from "@/components/platforms-list"
import { ReusableTooltip } from "@/components/reusable-tooltip"

function GameBadgesList ({ game }) {
  const badgeTexts = [game.platform.name, `${game.wishes} desejos`, `${game.offers} ofertas`, `Nota ${game.rating}`]
  return (
    <ul>
      {badgeTexts.map((text, index) =>
        <Badge key={index} className="bg-white/10 text-white/80 ml-0.5">
          {text}
        </Badge>)
      }
    </ul>
  )
}

function GameDescription ({ game }) {
  return (
    <p className="text-primary-blue">{game.description}</p>
  )
}

function GamePageButton ({ cardType, gamePageLink }) {
  return (
    <ReusableTooltip text="Ver jogo">
      <Button asChild size="icon" className={cn("bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10", cardType === "newReleaseGame" ? "self-end border-primary-blue hover:border-primary-blue" : "")}>
        <Link href={gamePageLink}>
          <MoveRight className={cardType === "newReleaseGame" ? "text-primary-blue" : ""} />
        </Link>
      </Button>
    </ReusableTooltip>
  )
}

function getPageLink ({ cardType, game }) {
  return cardType === "topGame" || cardType === "similarGame"
    ? `/game/${game.platform.slug}/${game.slug}`
    : `/game/${game.platforms[0].slug}/${game.slug}`
}

function getImageSrc ({ cardType, game }) {
  const platformSlug = cardType === "topGame" || cardType === "similarGame"
    ? game.platform.slug
    : game.platforms[0].slug
  return `/covers/${platformSlug}/${game.imageCover}`
}

export function GameCard ({ cardType, game }) {
  // cardType: "topGame" | "newReleaseGame" | "similarGame"
  const pageLink = getPageLink({ cardType, game })
  return (
    <li className={cn("break-inside-avoid mb-4 w-full border-2 rounded-2xl border-white/20 p-4 flex flex-col gap-4", cardType === "newReleaseGame" ? "border-primary-blue h-fit" : cardType === "similarGame" ? "mb-0 p-3 gap-2 rounded-xl" : "")}>
      <Link href={pageLink} className={cn("xsm:flex-shrink-0 sm:mx-auto", { "xsm:w-[183px]": cardType !== "similarGame" })}>
        <Image width={236} height={294} src={getImageSrc({ cardType, game })} alt={game.title} className="mx-auto w-full h-auto" />
      </Link>
      <div className={cn("xsm:flex xsm:flex-col xsm:w-full sm:h-full", cardType === "newReleaseGame" ? "" : "xsm:justify-between")}>
        <Link href={pageLink}>
          <h3 className={cn("wrap-anywhere text-3xl text-center uppercase font-semibold mt-0 mb-4 xsm:text-left sm:text-center", cardType === "newReleaseGame" ? "text-primary-blue" : cardType === "similarGame" ? "text-xs mb-0 text-slate-400" : "")}>{game.title}</h3>
        </Link>
        <div className={cn("flex justify-between items-center gap-4 xsm:items-end", { "flex-col": cardType === "newReleaseGame" })}>
          {cardType === "newReleaseGame" && (
            <>
              <GameDescription game={game} />
              <PlatformsList data={game} tooltipText="Ver jogo" logosWidth="w-20" linksType="game" />
            </>
          )}
          {cardType === "topGame" && (
            <>
              <GameBadgesList game={game} />
              <GamePageButton cardType={cardType} gamePageLink={pageLink} />
            </>
          )}
        </div>
      </div>
    </li >
  )
}
