import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { randomUUID } from "crypto"

const topExchangers = [
  { id: randomUUID(), avatar: "https://github.com/shadcn.png", position: 1, name: "Gustavo Caetano", city: "Bauru", state: "SP" },
  { id: randomUUID(), avatar: "https://github.com/shadcn.png", position: 1, name: "Fabio Motto", city: "São Paulo", state: "SP" },
  { id: randomUUID(), avatar: "https://github.com/shadcn.png", position: 2, name: "Eduardo Gomes", city: "Osasco", state: "SP" },
  { id: randomUUID(), avatar: "https://github.com/shadcn.png", position: 2, name: "Alex Cruz", city: "Rio de Janeiro", state: "RJ" },
  { id: randomUUID(), avatar: "https://github.com/shadcn.png", position: 3, name: "Erich vinícius", city: "Rio de Janeiro", state: "RJ" },
]

function Exchanger ({ avatar, position, name, city, state }) {
  const exchangerPageLink = "#"
  return (
    <li className="odd:bg-primary-blue even:bg-primary-yellow">
      <Link href={exchangerPageLink}>
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
      <Link href={exchangerPageLink}>
        <h3>{name}</h3>
      </Link>
      <p>{position}</p>
      <p>{`${city}/${state}`}</p>
    </li>
  )
}

export function ExchangersRanking () {
  return (
    <section className="px-4 py-8 bg-slate-950 lg:py-16 md:max-w-[1120px] md:mx-auto">
      <h2 className="font-bold uppercase text-primary-blue mb-6">Ranking de <span className="text-primary-yellow">Trocadores</span></h2>
      <ul>
        {topExchangers.map((exchanger) => (
          <Exchanger
            key={exchanger.id}
            avatar={exchanger.avatar}
            position={exchanger.position}
            name={exchanger.name}
            city={exchanger.city}
            state={exchanger.state}
          />
        ))}
      </ul>
      <h2>Ver ranking completo</h2>
    </section>
  )
}
