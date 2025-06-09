import { getGameOwners } from "@/lib/server-utils"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { UserCard } from "@/components/game-page/user-card"
import { Game } from "@/types"

const data = [
  {
    title: "BioShock",
    imageCover: "20091212000000_ps3-bioshock.jpg",
    slug: "bioshock",
    platformName: "Playstation 3",
    platformSlug: "ps3",
    scoreGeneral: 0,
    enumLevel: -1,
    wishes30days: 0,
    offers30days: 0,
    createdOn: "2014-09-02T13:56:18.593Z",
    isExchanging: false,
    orderGuid: "00000000-0000-0000-0000-000000000000"
  },
  {
    title: "BioShock",
    imageCover: "20091212000000_ps4-bioshock.jpg",
    slug: "bioshock",
    platformName: "Playstation 4",
    platformSlug: "ps4",
    scoreGeneral: 0,
    enumLevel: -1,
    wishes30days: 0,
    offers30days: 0,
    createdOn: "2014-09-02T13:56:18.593Z",
    isExchanging: false,
    orderGuid: "00000000-0000-0000-0000-000000000000"
  },
  {
    title: "BioShock 2",
    imageCover: "20091212000000_ps3-bioshock.jpg",
    slug: "bioshock-2",
    platformName: "Playstation 3",
    platformSlug: "ps3",
    scoreGeneral: 0,
    enumLevel: -1,
    wishes30days: 0,
    offers30days: 0,
    createdOn: "2014-09-02T13:56:18.593Z",
    isExchanging: false,
    orderGuid: "00000000-0000-0000-0000-000000000000"
  },
  {
    title: "BioShock 2",
    imageCover: "20091212000000_ps4-bioshock.jpg",
    slug: "bioshock-2",
    platformName: "Playstation 4",
    platformSlug: "ps4",
    scoreGeneral: 0,
    enumLevel: -1,
    wishes30days: 0,
    offers30days: 0,
    createdOn: "2014-09-02T13:56:18.593Z",
    isExchanging: false,
    orderGuid: "00000000-0000-0000-0000-000000000000"
  },
  // { id: Math.random(), selectLabel: "PlayStation 3", selectItems: [ { value:  } ] },
]

type OwnersListProps = {
  ownersPage: number
  platform: string
  slug: string
  game: Game
}

const take = 4

export async function OwnersList({ ownersPage = 1, platform, slug, game }: OwnersListProps) {
  // owners data
  const { gameOwners, totalCount } = await getGameOwners({ take, page: ownersPage })
  const prevPath = ownersPage > 1 && `/game/${platform}/${slug}?owners-page=${ownersPage - 1}`
  const hasNextPage = totalCount > (take * ownersPage)
  const nextPath = hasNextPage && `/game/${platform}/${slug}?owners-page=${ownersPage + 1}`
  // fetch user collection data & pass it down as props
  const userGamesByPlatform = Object.groupBy(data, (obj) => obj.platformName) // {Playstation 3: Array(2), Playstation 4: Array(2)}
  console.log("userGamesByPlatform:", userGamesByPlatform)
  const x = Object.keys(userGamesByPlatform) // ['Playstation 3', 'Playstation 4']
    .map((platform) => {
      return `
        <SelectLabel>${platform}</SelectLabel>
        ${userGamesByPlatform[platform]?.map((game) => {
        return `<SelectItem value="${game.slug}">${game.title}</SelectItem>`
      }).join('')}
      `
    }).join('')
  console.log("x:", x)
  // const keys = Object.keys(userGamesByPlatform)
  // console.log("keys:", keys) // ['Playstation 3', 'Playstation 4']
  // const firstPlatformGames = userGamesByPlatform[keys[0]]
  // console.log("firstPlatformGames:", firstPlatformGames) // [{…}, {…}]
  const userCollectionData = "abc"
  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {gameOwners.map((user) => <UserCard key={user.username} user={user} game={game} userCollectionData={userCollectionData} />)}
      </ul>

      <Pagination>
        <PaginationContent className="w-full">
          {prevPath && (
            <PaginationItem className="mr-auto">
              <PaginationPrevious href={prevPath} scroll={false} className="hover:bg-primary-yellow hover:text-primary-blue" />
            </PaginationItem>
          )}

          {nextPath && (
            <PaginationItem className="ml-auto">
              <PaginationNext href={nextPath} scroll={false} className="hover:bg-primary-yellow hover:text-primary-blue" />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
