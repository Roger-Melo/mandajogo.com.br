import { Button } from "@/components/ui/button"
import { UserRoundPlus } from "lucide-react"
import { siteName } from "@/lib/constants"

export function Hero() {
  return (
    <div className="px-4 py-8 bg-radial-[at_25%_25%] from-primary-blue/20 to-slate-950 to-75% min-[380px]:text-center lg:py-16">
      <h1 className="text-balance text-3xl font-bold sm:text-4xl lg:text-5xl lg:max-w-2xl lg:mx-auto">
        Game usado juntando poeira na estante <span className="text-primary-yellow">nunca mais</span>!
      </h1>

      <p className="text-balance text-lg mt-4 md:mx-auto md:max-w-3xl lg:text-xl lg:max-w-xl">
        Sabe aquele game que você já terminou e dificilmente voltará a jogar um dia? No <strong>{siteName}</strong> você encontra pessoas que podem estar interessadas nele!
      </p>

      <Button className="my-4 py-5 w-3xs bg-primary-yellow text-primary-black hover:cursor-pointer hover:bg-primary-yellow/90 lg:my-8 lg:py-6 lg:w-80">
        <UserRoundPlus />Participar do {siteName}
      </Button>

      <p className="text-balance text-sm md:w-lg md:mx-auto lg:max-w-2xl">
        O {siteName} é uma plataforma online especializada na troca de mídias físicas de jogos de videogame do Brasil, no ar desde 2025.
      </p>
    </div>
  )
}
