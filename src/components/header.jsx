import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const primaryBlack = "#0F0F0F"

export function Header () {
  return (
    <header className="w-full bg-primary-blue">
      <div className="mx-auto flex flex-col gap-3 py-4 px-4 items-center sm:flex-row sm:gap-8 sm:px-12 md:px-10 md:gap-7 md:justify-between lg:max-w-[1120px]">
        {/* logo */}
        <Link href="/">
          <Image
            priority
            width={484}
            height={128}
            sizes="(min-width: 1420px) 484px, (min-width: 1220px) calc(90vw - 776px), (min-width: 1040px) calc(15vw + 122px), (min-width: 640px) calc(15.53vw + 142px), (min-width: 560px) 484px, 90vw"
            src="/logo-manda-jogo.png"
            alt="Logo MandaJogo"
            className="w-32 h-auto sm:w-37 md:w-52 lg:w-64"
          />
        </Link>
        {/* searchbar */}
        <form className="flex w-full md:w-[460px] lg:w-[600px]">
          <Input type="search" placeholder="Jogo que você tem ou deseja" className="placeholder:text-white/70 border-2 border-white border-r-transparent text-white rounded-tr-none rounded-br-none sm:h-10 md:h-12 md:text-lg" />
          <Button type="submit" className="rounded-tl-none rounded-bl-none bg-primary-yellow hover:cursor-pointer hover:bg-primary-yellow/90 sm:h-10 md:h-12 md:w-14">
            <Search strokeWidth={3} color={primaryBlack} />
          </Button>
        </form>
      </div>
    </header>
  )
}
