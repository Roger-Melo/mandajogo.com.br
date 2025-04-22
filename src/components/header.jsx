import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header () {
  return (
    <header className="bg-yellow-400 flex flex-col gap-3 py-4 px-4 items-center sm:flex-row sm:gap-8 sm:px-12 md:px-8 md:gap-7">
      {/* logo */}
      <Link href="/">
        <div className="relative w-32 h-7 sm:w-37 sm:h-12 md:w-50 md:h-10">
          <Image src="/trocajogo.svg" alt="Logo TrocaJogos" fill className="object-contain" />
        </div>
      </Link>
      {/* searchbar */}
      <form className="flex w-full">
        <Input type="search" placeholder="Nome do jogo que você tem ou deseja" className="bg-white rounded-tr-none rounded-br-none sm:h-10 md:h-12 md:text-lg" />
        <Button type="submit" className="rounded-tl-none rounded-bl-none bg-sky-700 hover:cursor-pointer hover:bg-sky-800 sm:h-10 md:h-12 md:w-14">
          <Search strokeWidth={3} />
        </Button>
      </form>
    </header>
  )
}
