import Link from "next/link"
import { ReusableTooltip } from "@/components/reusable-tooltip"
import { cn } from "@/lib/utils"

export function PlatformsList ({ data, tooltipText, logosWidth, linksType }) {
  // linksType: "platform" | "game"
  return (
    <ul className="flex gap-2">
      {data.platforms.map((item) =>
        <li key={item.name}>
          <ReusableTooltip text={tooltipText}>
            <Link href={linksType === "game" ? `/game/${item.permalink}/${data.supplyPermalink}` : "#"}>
              <img className={cn("h-auto", logosWidth)} src={`/logos/${item.permalink}.svg`} alt={`${item.name} logo`} />
            </Link>
          </ReusableTooltip>
        </li>
      )}
    </ul>
  )
}
