import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn, tempLink } from "@/lib/utils"
import { PlatformsList } from "@/components/platforms-list"
import { GameTooltip } from "@/components/game-tooltip"

function GameBadgesList ({ game }) {
  const badgeTexts = [game.platform, `${game.desired} desejos`, `${game.offered} ofertas`, `Nota ${game.rating}`]
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

function GamePageButton ({ cardType }) {
  return (
    <GameTooltip text="Ver jogo">
      <Button asChild size="icon" className={cn(`bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10`, cardType === "newReleaseGame" ? "self-end border-primary-blue hover:border-primary-blue" : "")}>
        <Link href={tempLink}>
          <MoveRight className={cardType === "newReleaseGame" ? "text-primary-blue" : ""} />
        </Link>
      </Button>
    </GameTooltip>
  )
}

export function GameCard ({ cardType, game }) {
  return (
    <li className={cn("break-inside-avoid mb-4 w-full border-2 rounded-2xl border-white/20 p-4 flex flex-col gap-4", cardType === "newReleaseGame" ? "border-primary-blue h-fit" : "")}>
      <Link href={tempLink} className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={game.cover} alt={game.title} className="mx-auto w-full h-auto" />
      </Link>
      <div className={cn("ssm:flex ssm:flex-col ssm:w-full sm:h-full", cardType === "newReleaseGame" ? "" : "ssm:justify-between")}>
        <Link href={tempLink}>
          <h3 className={cn("wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center", { "text-primary-blue": cardType === "newReleaseGame" })}>{game.title}</h3>
        </Link>
        <div className={cn("flex justify-between items-center gap-4 ssm:items-end", { "flex-col": cardType === "newReleaseGame" })}>
          {cardType === "newReleaseGame"
            ? (
              <>
                <GameDescription game={game} />
                <PlatformsList game={game} />
              </>
            )
            : <GameBadgesList game={game} />
          }
          {cardType === "topGame" && <GamePageButton cardType={cardType} />}
        </div>
      </div>
    </li>
  )
}
