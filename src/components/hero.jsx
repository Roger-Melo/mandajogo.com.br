import { Button } from "@/components/ui/button"
import { UserRoundPlus } from "lucide-react"

const siteName = "MandaJogo"

export function Hero () {
  return (
    <div className="px-4 py-8 bg-radial-[at_25%_25%] from-primary-blue/20 to-primary-black to-75% min-[380px]:text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">
        Game usado juntando poeira na estante <span className="text-primary-yellow">nunca mais</span>!
      </h1>
      <p className="text-lg mt-4">Sabe aquele game que você já terminou e dificilmente voltará a jogar um dia? No <strong>{siteName}</strong> você encontra pessoas que podem estar interessadas nele!</p>
      <Button className="my-4 py-5 w-3xs bg-primary-yellow text-primary-black hover:cursor-pointer hover:bg-primary-yellow/90">
        <UserRoundPlus />Participar do {siteName}
      </Button>
      <p className="text-sm">O {siteName} é uma plataforma online especializada na troca de mídias físicas de jogos de videogame do Brasil, no ar desde 2025.</p>
    </div>
  )
}
