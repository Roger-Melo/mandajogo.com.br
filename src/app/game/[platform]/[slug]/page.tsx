import Link from "next/link"
import Image from "next/image"
import { game } from "@/db/sample-data/game"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameCard } from "@/components/game-card"
import { topDesiredGames } from "@/db/sample-data/top-desired-games"
// import { gameOwners } from "@/db/sample-data/game-owners"
import { getBoxCondition, getInterestLevels, getMediaCondition, getBookletCondition } from "@/lib/utils"
import { getGameOwners } from "@/lib/server-utils"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { GameInfo } from "@/components/game-page/game-info"
import { type GameOwner } from "@prisma/client"

type GamePageProps = {
  params: Promise<{ slug: string; platform: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type CommonProps = {
  ownersPage: number
  platform: string
  slug: string
}

function Aside() {
  return (
    <aside className="space-y-6 md:px-6 lg:px-0">
      <div className="space-y-2">
        <h3 className="text-lg text-slate-400">Vídeo Promocional</h3>
        <iframe className="aspect-video w-full" src={`https://www.youtube.com/embed/${game.urlVideo}`} allowFullScreen />
      </div>
      <div className="hidden lg:block lg:space-y-2">
        <h3 className="text-lg text-slate-400">Jogos Similares</h3>
        <ul className="grid grid-cols-3 gap-2">
          {topDesiredGames
            .filter((filteredGame) => filteredGame.title !== game.title)
            .map((game) => <GameCard cardType="similarGame" key={game.id} game={game} />)
          }
        </ul>
      </div>
    </aside>
  )
}

function GameConditionInfo({ user }: { user: GameOwner }) {
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

function UserCard({ user }: { user: GameOwner }) {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <section className="flex flex-col justify-center items-center ml-auto">
          <Link href="#">
            <Image src={user.imageAvatar} width={250} height={250} alt={`Imagem ${user.name}`} className="rounded-full w-20 hover:opacity-80" />
          </Link>
          <Link href="#">
            <h3 className="text-2xl font-semibold mt-2 hover:text-slate-400 text-center">{user.name.split(" ")[0]}</h3>
          </Link>
          <p className="text-xs text-slate-500 text-center">{user.city} / {user.state}</p>
          <Badge className="bg-slate-800 text-slate-400 mt-2">{user.exchangesCount} trocas</Badge>
        </section>
        <GameConditionInfo user={user} />
      </div>

      <Button className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">Fazer proposta</Button>
    </li>
  )
}

async function OwnersList({ ownersPage = 1, platform, slug }: CommonProps) {
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

function OwnersSection({ ownersPage = 1, platform, slug }: CommonProps) {
  return (
    <section className="space-y-2 lg:col-span-2 lg:mt-6">
      <h3 className="text-lg text-slate-400">Proprietários</h3>{/* Interessados | Ficha Técnica */}
      <OwnersList ownersPage={ownersPage} platform={platform} slug={slug} />
    </section>
  )
}

export default async function GamePage({ params, searchParams }: GamePageProps) {
  const { platform, slug } = await params
  const searchParamsObj = await searchParams
  const ownersPage = searchParamsObj["owners-page"] ? Number(searchParamsObj["owners-page"]) : 1
  return (
    <main className="pb-10 bg-radial-[at_25%_25%] from-primary-blue/10 to-slate-950 to-75%">
      <section className="flex flex-col gap-8 px-4 py-8 md:max-w-site-width md:mx-auto lg:py-16 lg:px-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 xl:px-0">
        <article className="md:px-6 lg:px-0 lg:space-y-6">
          <GameInfo game={game} />
          <OwnersSection ownersPage={ownersPage} platform={platform} slug={slug} />
        </article>
        <Aside />
      </section>
    </main>
  )
}
