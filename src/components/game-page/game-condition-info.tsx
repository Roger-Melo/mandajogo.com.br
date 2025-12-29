import Image from "next/image"
import { getMetadata } from "@/lib/utils"
import { type GameOwner } from "@/types"

export function GameConditionInfo({ user }: { user: GameOwner }) {
  const interestLevel = getMetadata({ kind: "interestLevel", index: user.enumLevel })
  const mediaCondition = getMetadata({ kind: "mediaCondition", index: user.conditionMedia })
  const boxCondition = getMetadata({ kind: "boxCondition", index: user.conditionBox })
  const bookletCondition = getMetadata({ kind: "bookletCondition", index: user.conditionBooklet })
  return (
    <ul className="space-y-3">
      <li className="flex gap-2 items-center">
        <Image unoptimized width={50} height={33} className="h-auto w-6" src={interestLevel.svgPath} alt={interestLevel.alt} />
        <span>Interesse</span>
      </li>
      <li className="flex gap-2 items-center">
        <Image unoptimized width={184} height={192} className="h-auto w-6" src={mediaCondition.svgPath} alt={mediaCondition.alt} />
        <span>Mídia</span>
      </li>
      <li className="flex gap-2 items-center">
        <Image unoptimized width={184} height={192} className="h-auto w-6" src={boxCondition.svgPath} alt={boxCondition.alt} />
        <span>Caixinha</span>
      </li>
      <li className="flex gap-2 items-center">
        <Image unoptimized width={184} height={192} className="h-auto w-6" src={bookletCondition.svgPath} alt={bookletCondition.alt} />
        <span>Encarte</span>
      </li>
    </ul>
  )
}
