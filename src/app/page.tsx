import { Hero } from "@/components/hero"
import { SectionTopGames } from "@/components/section-top-games"
import { SectionNewReleases } from "@/components/section-new-releases"
import { ExchangersRanking } from "@/components/exchangers-ranking"
import { topDesiredGames } from "@/db/sample-data/top-desired-games"
import { topOfferedGames } from "@/db/sample-data/top-offered-games"
import { newReleases } from "@/db/sample-data/new-releases"

function TopDesiredHeading() {
  return <>Os mais <span className="text-primary-yellow">desejados</span></>
}

function TopOfferedHeading() {
  return <>Os mais <span className="text-primary-yellow">ofertados</span></>
}

export default function HomePage() {
  return (
    <>
      <main className="pb-10">
        <Hero />
        <SectionTopGames games={topDesiredGames} heading={<TopDesiredHeading />} />
        <SectionTopGames games={topOfferedGames} heading={<TopOfferedHeading />} />
        <ExchangersRanking />
        <SectionNewReleases games={newReleases} />
      </main>
    </>
  )
}
