// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search } from "lucide-react"
import { Logo } from "@/components/logo"

// const primaryBlack = "#0F0F0F"

export function Header () {
  return (
    <header className="w-full bg-primary-blue">
      <div className="mx-auto flex items-center justify-center px-4 py-5 sm:px-12 sm:py-6 md:px-10 md:py-6 lg:max-w-site-width xl:px-0">
        <Logo />
        {/* searchbar */}
        {/*
        <form className="flex w-full md:w-[460px] lg:w-[600px]">
          <Input type="search" placeholder="Jogo que você tem ou deseja" className="placeholder:text-white/70 border-2 border-white border-r-transparent text-white rounded-tr-none rounded-br-none sm:h-10 md:h-12 md:text-lg" />
          <Button type="submit" className="rounded-tl-none rounded-bl-none bg-primary-yellow hover:cursor-pointer hover:bg-primary-yellow/90 sm:h-10 md:h-12 md:w-14">
            <Search strokeWidth={3} color={primaryBlack} />
          </Button>
        </form>
        */}
      </div>
    </header>
  )
}
