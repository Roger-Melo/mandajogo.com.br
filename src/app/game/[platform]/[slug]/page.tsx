import Link from "next/link"
import Image from "next/image"
import { HandHelping, Heart, Star } from "lucide-react"
import { game } from "@/db/sample-data/game"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameCard } from "@/components/game-card"
import { topDesiredGames } from "@/db/sample-data/top-desired-games"

type GamePageProps = {
  params: Promise<{ slug: string; platform: string }>
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

function GameInfo() {
  return (
    <div className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-6 lg:mb-2">
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          <Image width={236} height={294} src={`/covers/${game.platformSlug}/${game.imageCover}`} alt={game.title} className="max-w-[360px] h-auto rounded-sm lg:w-full" />
          <Image unoptimized width={112} height={30} className="h-auto w-20 my-4" src={`/svg/logos/${game.platformSlug}.svg`} alt={`${game.platformName} logo`} />
        </div>
        <ul className="flex gap-4 justify-center sm:gap-8 lg:flex-col lg:gap-2">
          <li className="flex gap-1 items-center lg:gap-2">
            <Heart className="w-4 sm:w-6" />
            <span className="text-xs sm:text-base">
              <span className="font-bold">{game.wishes}</span>{" "}
              Desejos
            </span>
          </li>
          <li className="flex gap-1 items-center lg:gap-2">
            <HandHelping className="w-4 sm:w-6" />
            <span className="text-xs sm:text-base">
              <span className="font-bold">{game.offers}</span>{" "}
              Ofertas
            </span>
          </li>
          <li className="flex gap-1 items-center lg:gap-2">
            <Star className="w-4 sm:w-6" />
            <span className="text-xs sm:text-base">
              Nota{" "}
              <span className="font-bold">{game.scoreMandaJogo}</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="md:text-center md:my-8 lg:max-w-none lg:my-0 lg:text-left">
        <div className="my-6 lg:mt-0">
          <small className="block text-sm text-slate-400 sm:max-w-xl sm:mx-auto">{game.platformName}</small>
          <h1 className="text-3xl font-bold mt-1 mb-3 sm:max-w-xl sm:mx-auto lg:text-5xl">{game.title}</h1>
          <p className="text-slate-300 sm:max-w-xl sm:mx-auto lg:text-xl">{game.description}</p>
        </div>

        <ul className="flex gap-3 w-full justify-between mb-8 sm:w-sm sm:gap-4 sm:mx-auto lg:mx-0">
          <li className="w-full">
            <Button className="font-medium bg-primary-yellow pb-3 w-full text-slate-900 hover:bg-primary-yellow/90" asChild>
              <Link href="#">
                <Heart />Eu quero
              </Link>
            </Button>
          </li>
          <li className="w-full">
            <Button className="font-medium bg-primary-blue pb-3 w-full hover:bg-primary-blue/80" asChild>
              <Link href="#">
                <Star />Eu tenho
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

function UserCard() {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 space-y-4">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <section className="flex flex-col justify-center items-center ml-auto">
          <Link href="#">
            <Image src="/users/game-owners/rafael.jpg" width={250} height={250} alt="Imagem Rafael" className="rounded-full w-20 hover:opacity-80" />
          </Link>
          <Link href="#">
            <h3 className="text-2xl font-semibold mt-2 hover:text-slate-400">Guilherme</h3>
          </Link>
          <p className="text-xs text-slate-500">Rio de Janeiro / RJ</p>
          <Badge className="bg-slate-800 text-slate-400 mt-2">0 trocas</Badge>
        </section>

        <ul className="space-y-3">
          <li className="flex gap-2 items-center">
            <Image unoptimized width={50} height={33} className="h-auto w-6" src={`/svg/gauges/6-muito-alto.svg`} alt={"Interesse"} />
            <span>Interesse</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image unoptimized width={184} height={192} className="h-auto w-6" src={`/svg/conditions/4-perfeito.svg`} alt={"Condição do Mídia"} />
            <span>Mídia</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image unoptimized width={184} height={192} className="h-auto w-6" src={`/svg/conditions/4-perfeito.svg`} alt={"Condição do Caixinha"} />
            <span>Caixinha</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image unoptimized width={184} height={192} className="h-auto w-6" src={`/svg/conditions/4-perfeito.svg`} alt={"Condição do Encarte"} />
            <span>Encarte</span>
          </li>
        </ul>
      </div>

      <Button asChild className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">
        <Link href="#">Fazer proposta</Link>
      </Button>
    </li>
  )
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug, platform } = await params
  console.log("slug:", slug, "platform:", platform)
  return (
    <main className="pb-10 bg-radial-[at_25%_25%] from-primary-blue/10 to-slate-950 to-75%">
      <section className="flex flex-col gap-8 px-4 py-8 md:max-w-site-width md:mx-auto lg:py-16 lg:px-10 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 xl:px-0">
        <article className="md:px-6 lg:px-0 lg:space-y-6">
          <GameInfo />
          <section className="space-y-2 lg:col-span-2 lg:mt-6">
            <h3 className="text-lg text-slate-400">Proprietários</h3>{/* Interessados | Ficha Técnica */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UserCard />
            </ul>
            {/* pagination */}
            <p className="hidden">1, 2, 3, 4, 5, 6, 7...</p>
          </section>
        </article>
        <Aside />
      </section>
    </main>
  )
}
