import Link from "next/link"
import { ReusableTooltip } from "@/components/reusable-tooltip"
import { cn } from "@/lib/utils"
/*
  {
    imageCover: "stellar-blade.jpg",
    slug: "suikoden-i-and-ii-hd-remaster-gate-rune-and-dunan-unification-wars",
    releasedOn: "2025-05-30T03:00:00Z",
    platforms: [
      { name: "Playstation 5", slug: "ps5", company: "Sony" },
      { name: "Nintendo Switch", slug: "nintendo-switch", company: "Nintendo" },
    ],
    description: "...",
  },
*/
export function PlatformsList ({ data, tooltipText, logosWidth, linksType }) {
  // linksType: "platform" | "game"
  const dataArray = linksType === "game" ? data.platforms : data
  return (
    <ul className={cn("flex gap-2", linksType === "game" ? "" : "flex-wrap justify-center px-4")}>
      {dataArray.map((item, index) =>
        <li key={index}>
          <ReusableTooltip text={tooltipText}>
            <Link href={linksType === "game" ? `/game/${item.slug}/${data.slug}` : `/console/${item.slug}`}>
              <img className={cn("h-auto", logosWidth)} src={`/logos/${item.slug}.svg`} alt={`${item.name} logo`} />
            </Link>
          </ReusableTooltip>
        </li>
      )}
    </ul>
  )
}
