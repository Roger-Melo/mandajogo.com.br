import Link from "next/link"
import { BaseTooltip } from "@/components/base-tooltip"
import { cn } from "@/lib/utils"

export function PlatformsList ({ data, tooltipText, logosWidth, linksType }) {
  // linksType: "platform" | "game"
  const dataArray = linksType === "game" ? data.platforms : data
  return (
    <ul className={cn("flex gap-2", linksType === "game" ? "" : "flex-wrap justify-center px-4")}>
      {dataArray.map((item, index) =>
        <li key={index}>
          <BaseTooltip text={tooltipText}>
            <Link href={linksType === "game" ? `/game/${item.slug}/${data.slug}` : `#`}>
              <img className={cn("h-auto", logosWidth)} src={`/svg/logos/${item.slug}.svg`} alt={`${item.name} logo`} />
            </Link>
          </BaseTooltip>
        </li>
      )}
    </ul>
  )
}
