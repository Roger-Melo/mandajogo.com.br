import { getGameOwners } from "@/lib/server-utils"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { UserCard } from "@/components/game-page/user-card"

type OwnersListProps = {
  ownersPage: number
  platform: string
  slug: string
}

export async function OwnersList({ ownersPage = 1, platform, slug }: OwnersListProps) {
  const take = 4
  const { gameOwners, totalCount } = await getGameOwners({ take, page: ownersPage })

  const prevPath = ownersPage > 1 && `/game/${platform}/${slug}?owners-page=${ownersPage - 1}`
  const hasNextPage = totalCount > (take * ownersPage)
  const nextPath = hasNextPage && `/game/${platform}/${slug}?owners-page=${ownersPage + 1}`

  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {gameOwners.map((user) => <UserCard key={user.username} user={user} />)}
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
