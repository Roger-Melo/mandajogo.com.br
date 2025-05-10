import Link from "next/link"
import { Handshake, MessageCircle, Heart, Library, MenuIcon } from "lucide-react"
import { tempLink } from "@/lib/utils"

const links = [
  { href: tempLink, text: "Oportunidades", icon: Handshake },
  { href: tempLink, text: "Mensagens", icon: MessageCircle },
  { href: tempLink, text: "Desejos", icon: Heart },
  { href: tempLink, text: "Coleção", icon: Library },
]

function MenuBarLink ({ href, text, icon: Icon }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-1">
      <Icon className="h-5 w-5" />
      <span className="text-xs">{text}</span>
    </Link>
  )
}

export function MenuBar () {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-primary-blue text-white w-full px-2 py-3">
      {links.map((link) =>
        <MenuBarLink key={link.text} href={link.href} text={link.text} icon={link.icon} />)}

      <div className="flex flex-col items-center justify-center">
        <MenuIcon className="h-5 w-5 mb-1" />
        <span className="text-xs">Menu</span>
      </div>
    </nav>
  )
}
