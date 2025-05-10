import Link from "next/link"
import { Handshake, MessageCircle, Heart, Library, MenuIcon } from "lucide-react"
import { tempLink } from "@/lib/utils"

export function MenuBar () {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-primary-blue text-white w-full px-2 py-3">
      <Link href={tempLink} className="flex flex-col items-center justify-center">
        <Handshake className="h-5 w-5 mb-1" />
        <span className="text-xs">Oportunidades</span>
      </Link>

      <div className="flex flex-col items-center justify-center">
        <MessageCircle className="h-5 w-5 mb-1" />
        <span className="text-xs">Mensagens</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Heart className="h-5 w-5 mb-1" />
        <span className="text-xs">Desejos</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Library className="h-5 w-5 mb-1" />
        <span className="text-xs">Coleção</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <MenuIcon className="h-5 w-5 mb-1" />
        <span className="text-xs">Menu</span>
      </div>
    </nav>
  )
}
