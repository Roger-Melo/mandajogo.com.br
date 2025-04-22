import Link from "next/link"

export function Header () {
  return (
    <header>
      <Link href="/">
        <img src="/trocajogo.svg" alt="Logo TrocaJogos" />
      </Link>
    </header>
  )
}
