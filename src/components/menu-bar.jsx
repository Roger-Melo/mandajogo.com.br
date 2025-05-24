"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LogIn, LogOut, Settings, ArrowRightLeft, ListChecks, Handshake, MessageCircle, Heart, Library, MenuIcon, UserRoundPlus } from "lucide-react"
import { cn, tempLink } from "@/lib/utils"

const oportunitiesLink = { id: Math.random(), href: tempLink, text: "Oportunidades", icon: Handshake }
const messagesLink = { id: Math.random(), href: tempLink, text: "Mensagens", icon: MessageCircle }
const desiresLink = { id: Math.random(), href: tempLink, text: "Desejos", icon: Heart }
const collectionLink = { id: Math.random(), href: tempLink, text: "Coleção", icon: Library }

const loggedUserMobileLinks = [oportunitiesLink, messagesLink, desiresLink, collectionLink]

const loggedUserMdLinks = [
  oportunitiesLink,
  { id: Math.random(), href: tempLink, text: "Propostas", icon: ListChecks },
  { id: Math.random(), href: tempLink, text: "Trocas", icon: ArrowRightLeft },
  desiresLink,
  collectionLink,
  messagesLink,
  { id: Math.random(), href: tempLink, text: "Preferências", icon: Settings },
]

const notLoggedUserLinks = [
  { id: Math.random(), href: tempLink, text: "Participar do MandaJogo", icon: UserRoundPlus },
  { id: Math.random(), href: tempLink, text: "Acessar minha conta", icon: LogIn },
]

function MenuBarLink ({ href, text, icon: Icon, user }) {
  return (
    <Link href={href} className={cn("flex flex-col items-center justify-center gap-1", user ? "md:flex-row" : "ssm:flex-row")}>
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
  const loggedUserLinks = isMdBreakpoint
    ? loggedUserMdLinks.map((link) => ["Mensagens", "Preferências"].some((t) => t === link.text) ? { ...link, text: "" } : link)
    : loggedUserMobileLinks
  const user = false // this const is a temp placeholder to test markup & styling
  return (
    <nav className="bg-primary-blue text-white fixed bottom-0 left-0 right-0 z-50 md:bg-slate-950 md:bottom-auto md:top-0">
      <div className="flex items-center justify-between px-2 py-3 gap-4 md:px-10 lg:max-w-site-width lg:mx-auto xl:px-0">
        {/* xl-only heading */}
        <strong className="hidden xl:block xl:text-xs xl:uppercase">MandaJogo - Comunidade de Troca de Jogos de Videogame</strong>

        <ul className="flex justify-around flex-1 md:items-center md:justify-end md:gap-3">
          {!user && notLoggedUserLinks.map((link) => <MenuBarLink key={link.id} href={link.href} text={link.text} icon={link.icon} user={user} />)}
          {user && loggedUserLinks.map((link) => <MenuBarLink key={link.id} href={link.href} text={link.text} icon={link.icon} user={user} />)}
          {/* mobile-and-logged-user-only Menu button */}
          {user && (
            <li className="flex flex-col items-center justify-center md:hidden">
              <MenuIcon className="h-5 w-5 mb-1" />
              <span className="text-xs">Menu</span>
            </li>
          )}

          {/* md-only Logout button */}
          {user && (
            <li className="hidden md:flex md:gap-1 md:items-center">
              <LogOut className="h-5 w-5" />
              <span className="text-xs md:uppercase md:leading-none">Sair</span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
