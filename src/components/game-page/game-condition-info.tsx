import Image from "next/image"
import { getBoxCondition, getInterestLevels, getMediaCondition, getBookletCondition } from "@/lib/utils"
import { type GameOwner } from "@/types"

export function GameConditionInfo({ user }: { user: GameOwner }) {
  const interestLevel = getInterestLevels(user.enumLevel)
  const mediaCondition = getMediaCondition(user.conditionMedia)
  const boxCondition = getBoxCondition(user.conditionBox)
  const bookletCondition = getBookletCondition(user.conditionBooklet)
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
