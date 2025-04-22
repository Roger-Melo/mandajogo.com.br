import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export function Header () {
  return (
    <header>
      <Link href="/">
        <img src="/trocajogo.svg" alt="Logo TrocaJogos" />
      </Link>
      <form>
        <Input type="search" placeholder="Nome do jogo que você tem ou deseja" />
        <Button>
          <Search />
        </Button>
      </form>
    </header>
  )
}
