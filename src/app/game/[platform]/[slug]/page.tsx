import { gameDetails } from "@/db/game/game-details"
import { GameInfo } from "@/components/game-page/game-info"
import { OwnersSection } from "@/components/game-page/owners-section"
import { Aside } from "@/components/game-page/aside"

type GamePageProps = {
  params: Promise<{ slug: string; platform: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function GameDetailsPage({ params, searchParams }: GamePageProps) {
  const { platform, slug } = await params
  const searchParamsObj = await searchParams
  const ownersPage = searchParamsObj["owners-page"] ? Number(searchParamsObj["owners-page"]) : 1
  return (
    <main className="pb-10 bg-radial-[at_25%_25%] from-primary-blue/10 to-slate-950 to-75%">
      <section className="flex flex-col gap-8 px-4 py-8 md:max-w-site-width md:mx-auto lg:py-16 lg:px-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 xl:px-0">
        <article className="md:px-6 lg:px-0 lg:space-y-6">
          <GameInfo game={gameDetails} />
          <OwnersSection game={gameDetails} ownersPage={ownersPage} platform={platform} slug={slug} />
        </article>
        <Aside game={gameDetails} />
      </section>
    </main>
  )
}
