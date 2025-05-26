import { siteName } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function Logo () {
  return (
    <Link href="/">
      <Image
        priority
        width={484}
        height={128}
        sizes="(min-width: 1420px) 484px, (min-width: 1220px) calc(90vw - 776px), (min-width: 1040px) calc(15vw + 122px), (min-width: 640px) calc(15.53vw + 142px), (min-width: 560px) 484px, 90vw"
        src="/logo-manda-jogo.png"
        alt={`Logo ${siteName}`}
        className="w-32 h-auto sm:w-37 md:w-52 lg:w-64"
      />
    </Link>
  )
}
