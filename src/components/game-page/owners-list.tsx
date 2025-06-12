import { getGameOwners } from "@/lib/server-utils"
import { ownersPerPage } from "@/lib/constants"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { UserCard } from "@/components/game-page/user-card"
import { Game } from "@/types"

const loggedUserGamesCollection = [
  {
    id: Math.random(),
    title: "God Of War: Ragnarök",
    imageCover: "20091212000000_ps5-god-of-war-ragnarok.jpg",
    slug: "god-of-war-ragnarok",
    platformName: "PlayStation 5",
    platformSlug: "ps5",
    scoreGeneral: 0,
    enumLevel: -1,
    wishes30days: 0,
    offers30days: 0,
    createdOn: "2014-09-02T13:56:18.593Z",
    isExchanging: false,
    orderGuid: "00000000-0000-0000-0000-000000000000"
  },
  {
    id: Math.random(),
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
  {
    id: Math.random(),
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
    id: Math.random(),
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
]

type OwnersListProps = {
  ownersPage: number
  platform: string
  slug: string
  game: Game
}

export async function OwnersList({ ownersPage = 1, platform, slug, game }: OwnersListProps) {
  // owners data
  const { gameOwners, totalCount } = await getGameOwners({ take: ownersPerPage, page: ownersPage })
  const prevPath = ownersPage > 1 && `/game/${platform}/${slug}?owners-page=${ownersPage - 1}`
  const hasNextPage = totalCount > (ownersPerPage * ownersPage)
  const nextPath = hasNextPage && `/game/${platform}/${slug}?owners-page=${ownersPage + 1}`
  // fetch user collection data here & pass it down as props
  return (
    <div className="space-y-4">
      <ul data-testid="game-owners-list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {gameOwners.map((user) =>
          <UserCard
            key={user.username}
            user={user}
            game={game}
            loggedUserGamesCollection={loggedUserGamesCollection}
          />
        )}
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
