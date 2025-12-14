import "server-only"

import { gameOwners as gameOwnersData } from "@/db/game-owners"
import { ownersPerPage } from "@/lib/constants"
import { GameOwner } from "@/types"

type GetGameOwnersParams = {
  take?: number
  page?: number
}

type GetGameOwnersResponse = {
  gameOwners: GameOwner[]
  totalCount: number
}

export async function getGameOwners({ take = ownersPerPage, page = 1 }: GetGameOwnersParams = {}): Promise<GetGameOwnersResponse> {
  const sortedGameOwners = gameOwnersData.data.toSorted((currentGameOwner, nextGameOwner) => nextGameOwner.enumLevel - currentGameOwner.enumLevel)
  const startIndex = (page - 1) * take
  const gameOwners = sortedGameOwners.slice(startIndex, startIndex + take)
  const totalCount = gameOwnersData.data.length
  return { gameOwners, totalCount }
}
