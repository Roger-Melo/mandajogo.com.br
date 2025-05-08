import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { randomUUID } from "crypto"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const topExchangers = [
  { id: randomUUID(), avatar: "/users/gustavo.jpg", position: 1, name: "Gustavo Caetano", city: "Bauru", state: "SP" },
  { id: randomUUID(), avatar: "/users/fabio.jpg", position: 1, name: "Fabio Motto", city: "São Paulo", state: "SP" },
  { id: randomUUID(), avatar: "/users/eduardo.jpg", position: 2, name: "Eduardo Gomes", city: "Osasco", state: "SP" },
  { id: randomUUID(), avatar: "/users/alex.jpg", position: 2, name: "Alex Cruz", city: "Rio de Janeiro", state: "RJ" },
  { id: randomUUID(), avatar: "/users/erich.jpg", position: 3, name: "Erich vinícius", city: "Rio de Janeiro", state: "RJ" },
]

function Exchanger ({ avatar, position, name, city, state }) {
  const exchangerPageLink = "#"
  return (
    <li className="flex flex-col p-4 text-center min-[430px]:flex-row min-[430px]:text-left min-[430px]:items-center min-[430px]:gap-4">
      {/* avatar */}
      <Link href={exchangerPageLink} className="mx-auto min-[430px]:mx-0">
        <Avatar className="w-32 h-32 border-4 border-white">
          <AvatarImage src={avatar} alt={`Avatar de ${name}`} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </Link>

      {/* text */}
      <div>
        <Link href={exchangerPageLink}>
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 min-[430px]:text-left min-[430px]:mt-0 min-[430px]:mb-2">{name}</h3>
        </Link>
        <p>{position}º Lugar</p>
        <p>{`${city} - ${state}`}</p>
      </div>
    </li>
  )
}

export function ExchangersRanking () {
  return (
    <section className="px-4 py-8 bg-slate-950 lg:py-16 md:max-w-[1120px] md:mx-auto mb-96">
      <h2 className="font-bold uppercase text-primary-blue mb-6">Ranking de <span className="text-primary-yellow">Trocadores</span></h2>

      <Carousel className="w-full" opts={{ loop: false, slidesToScroll: "auto", align: "start", containScroll: "trimSnaps" }}>
        <CarouselContent className="sm:flex sm:gap-4 sm:snap-x sm:snap-mandatory">
          {topExchangers.map((exchanger) => (
            <CarouselItem key={exchanger.id} className="
              odd:bg-primary-blue
              even:text-primary-black
              even:bg-primary-yellow
              rounded-2xl
              min-w-0
              shrink-0
              basis-full
              min-[430px]:flex
              min-[430px]:justify-center
              sm:basis-[calc(50%-0.5rem)]
              sm:shrink-0
              sm:px-4
              sm:min-w-0
              sm:flex
              sm:justify-center
              sm:snap-start
            ">
              <Exchanger avatar={exchanger.avatar} position={exchanger.position} name={exchanger.name} city={exchanger.city} state={exchanger.state} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-4 relative z-10">
          <CarouselPrevious className="static translate-y-0 bg-transparent border-2 border-white/7 hover:cursor-pointer" />
          <CarouselNext className="static translate-y-0 bg-transparent border-2 border-white/7 hover:cursor-pointer" />
        </div>
      </Carousel>

      <h2 className="text-center mt-4">Ver ranking completo</h2>
    </section>
  )
}
