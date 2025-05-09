import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { cn, tempLink } from "@/lib/utils"

// paragraph example
/*
<div className="mb-4 space-y-3 text-slate-300">
  <p>Mergulhe no Passado com Khazan: Aventure-se no Universo de DNF</p>
  <p>Desperte seu herói interior em "The First Berserker: Khazan". Reviva a história de Khazan e Ozma, os lendários salvadores do Império Pell Los. Acompanhe Khazan, o herói exilado, em sua busca por justiça após ser injustamente acusado de traição. Experimente um RPG de ação carregado de batalhas intensas e uma narrativa envolvente.</p>
</div>
*/
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

export function GameCard ({ cardType, game }) {
  return (
    <li className={cn("w-full gap-4 sm:w-[calc(50%-0.5rem)] border-2 rounded-2xl border-white/20 p-4 flex flex-col lg:w-[calc(33%-0.5rem)]", { "border-primary-blue": cardType === "newReleaseGame" })}>
      {/* image */}
      <Link href={tempLink} className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={game.cover} alt={game.title} className="mx-auto w-full h-auto" />
      </Link>

      <div className="ssm:flex ssm:flex-col ssm:justify-between ssm:w-full sm:h-full">
        {/* title */}
        <Link href={tempLink}>
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center">{game.title}</h3>
        </Link>

        {/* bottom container */}
        <div className="flex justify-between items-center gap-4 ssm:items-end">
          {cardType === "topGame"
            ? <GameBadgesList game={game} />
            : <p>{game.description}</p>
          }

          {/* link game page */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild size="icon" className="bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10">
                  <Link href={tempLink}>
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
