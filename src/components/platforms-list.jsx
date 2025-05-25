import Link from "next/link"
import { GameTooltip } from "@/components/game-tooltip"

export function PlatformsList ({ game }) {
  return (
    <ul className="flex gap-2">
      {game.platforms.map((platform) =>
        <li key={platform.name}>
          <GameTooltip text="Ver jogo">
            <Link href="#">
              <img className="w-20 h-auto" src={platform.logo} alt={`${platform.name} logo`} />
            </Link>
          </GameTooltip>
        </li>
      )}
    </ul>
  )
}
