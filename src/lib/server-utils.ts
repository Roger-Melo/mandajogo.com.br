import "server-only"
import prisma from "@/lib/db"
import { unstable_cache } from "next/cache"

export const getGameOwners = unstable_cache(async ({ take = 4, page = 1 } = {}) => {
  const gameOwners = await prisma.gameOwner.findMany({
    orderBy: { enumLevel: "desc" },
    take,
    skip: (page - 1) * take,
  })

  const totalCount = await prisma.gameOwner.count()
  return { gameOwners, totalCount }
})
