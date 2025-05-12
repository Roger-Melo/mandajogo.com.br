"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LogOut, Settings, ArrowRightLeft, ListChecks, Handshake, MessageCircle, Heart, Library, MenuIcon } from "lucide-react"
import { tempLink } from "@/lib/utils"

const oportunitiesLink = { id: Math.random(), href: tempLink, text: "Oportunidades", icon: Handshake }
const messagesLink = { id: Math.random(), href: tempLink, text: "Mensagens", icon: MessageCircle }
const desiresLink = { id: Math.random(), href: tempLink, text: "Desejos", icon: Heart }
const collectionLink = { id: Math.random(), href: tempLink, text: "Coleção", icon: Library }

const mobileLinks = [oportunitiesLink, messagesLink, desiresLink, collectionLink]

const mdLinks = [
  oportunitiesLink,
  { id: Math.random(), href: tempLink, text: "Propostas", icon: ListChecks },
  { id: Math.random(), href: tempLink, text: "Trocas", icon: ArrowRightLeft },
  desiresLink,
  collectionLink,
  messagesLink,
  { id: Math.random(), href: tempLink, text: "Preferências", icon: Settings },
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
  const links = isMdBreakpoint
    ? mdLinks.map((link) => ["Mensagens", "Preferências"].some((t) => t === link.text) ? { ...link, text: "" } : link)
    : mobileLinks
  return (
    <nav className="bg-primary-blue text-white fixed bottom-0 left-0 right-0 z-50 md:bg-slate-950 md:bottom-auto md:top-0 md:px-8">
      <div className="flex items-center justify-between px-2 py-3 gap-4 lg:max-w-site-width lg:mx-auto lg:px-0">
        {/* xl-only heading */}
        <strong className="hidden xl:block xl:text-xs xl:uppercase">MandaJogo - Comunidade de Troca de Jogos de Videogame</strong>

        <ul className="flex justify-around flex-1 md:items-center md:justify-end md:gap-3">
          {links.map((link) =>
            <MenuBarLink key={link.id} href={link.href} text={link.text} icon={link.icon} />)}
          {/* mobile-only Menu button */}
          <li className="flex flex-col items-center justify-center md:hidden">
            <MenuIcon className="h-5 w-5 mb-1" />
            <span className="text-xs">Menu</span>
          </li>

          {/* md-only Logout button */}
          <li className="hidden md:flex md:gap-1 md:items-center">
            <LogOut className="h-5 w-5" />
            <span className="text-xs md:uppercase md:leading-none">Sair</span>
          </li>
        </ul>
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
