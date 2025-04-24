import { Hero } from "@/components/hero"
import { TopGamesSection } from "@/components/top-games-section"

const topDesiredGames = [
  { title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
  { title: "Spider-Man 2", platform: "PS5", desired: 249, offered: 134, rating: 9.2, cover: "/covers/ps5/spider-man-2.jpg" },
  { title: "Stellar Blade", platform: "PS5", desired: 73, offered: 31, rating: 8.8, cover: "/covers/ps5/stellar-blade.jpg" },
  { title: "The Last of Us Part II Remastered", platform: "PS5", desired: 130, offered: 41, rating: 9.3, cover: "/covers/ps5/the-last-of-us-part-ii-remastered.jpg" },
  { title: "Cyberpunk 2077: Ultimate Edition", platform: "PS5", desired: 70, offered: 5, rating: 8.6, cover: "/covers/ps5/cyberpunk-2077-ultimate-edition.jpg" },
]

const topOfferedGames = [
  { title: "God of War", platform: "PS4", desired: 2164, offered: 3034, rating: 9.7, cover: "/covers/ps4/god-of-war.jpg" },
  { title: "Returnal", platform: "PS5", desired: 191, offered: 251, rating: 8.4, cover: "/covers/ps5/returnal.jpg" },
  { title: "Ratchet & Clank: Rift Apart", platform: "PS5", desired: 210, offered: 268, rating: 8.8, cover: "/covers/ps5/ratchet-and-clank-rift-apart.jpg" },
  { title: "God Of War: Ragnarök", platform: "PS5", desired: 282, offered: 317, rating: 9.5, cover: "/covers/ps5/god-of-war-ragnarok.jpg" },
  { title: "Astro Bot", platform: "PS5", desired: 70, offered: 30, rating: 9.3, cover: "/covers/ps5/astro-bot.jpg" },
]

function TopDesiredHeading() {
  return <>Os mais <span className="text-primary-yellow">desejados</span></>
}

function TopOfferedHeading() {
  return <>Os mais <span className="text-primary-yellow">ofertados</span></>
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TopGamesSection games={topDesiredGames} heading={<TopDesiredHeading />} />
        <TopGamesSection games={topOfferedGames} heading={<TopOfferedHeading />} />
      </main>
    </>
  )
}
