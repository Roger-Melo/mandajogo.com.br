"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LogOut, Settings, ArrowRightLeft, ListChecks, Handshake, MessageCircle, Heart, Library, MenuIcon } from "lucide-react"
import { tempLink } from "@/lib/utils"

const oportunitiesLink = { href: tempLink, text: "Oportunidades", icon: Handshake }
const messagesLink = { href: tempLink, text: "Mensagens", icon: MessageCircle }
const desiresLink = { href: tempLink, text: "Desejos", icon: Heart }
const collectionLink = { href: tempLink, text: "Coleção", icon: Library }

const mobileLinks = [oportunitiesLink, messagesLink, desiresLink, collectionLink]

const mdLinks = [
  oportunitiesLink,
  { href: tempLink, text: "Propostas", icon: ListChecks },
  { href: tempLink, text: "Trocas", icon: ArrowRightLeft },
  desiresLink,
  collectionLink,
  messagesLink,
  { href: tempLink, text: "Preferências", icon: Settings },
]

function MenuBarLink ({ href, text, icon: Icon }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-1 md:flex-row">
      <Icon className="h-5 w-5" />
      <span className="text-xs md:uppercase md:leading-none">{text}</span>
    </Link>
  )
}

function useBreakpoint () {
  const [isMdBreakpoint, setIsMdBreakpoint] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)") // md breakpoint in Tailwind
    const handleChange = () => setIsMdBreakpoint(mediaQuery.matches)

    handleChange() // set initial value
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return { isMdBreakpoint }
}

export function MenuBar () {
  const { isMdBreakpoint } = useBreakpoint()
  const links = isMdBreakpoint ? mdLinks : mobileLinks
  return (
    <nav>
      <div>
        <strong>MandaJogo - Comunidade de Troca de Jogos de Videogame</strong>
        <ul>
          {links.map((link) =>
            <MenuBarLink key={link.text} href={link.href} text={link.text} icon={link.icon} />)}
        </ul>
        <button>Menu</button>
        <button><LogOut /> Sair</button>
      </div>
    </nav>
  )
  // 👇🏻 not commented for now to keep the syntax highlight & renaming identifier benefits
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-primary-blue text-white w-full px-2 py-3 ssm:px-4 md:bottom-auto md:top-0 md:bg-primary-black md:px-10">
      {mobileLinks.map((link) => <MenuBarLink key={link.text} href={link.href} text={link.text} icon={link.icon} />)}

      {/* Mobile-only Menu button */}
      <div className="flex flex-col items-center justify-center md:hidden">
        <MenuIcon className="h-5 w-5 mb-1" />
        <span className="text-xs">Menu</span>
      </div>
    </nav>
  )
}
