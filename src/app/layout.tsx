import type { Metadata } from "next"
import { Header } from "@/components/header"
import { MenuBar } from "@/components/menu-bar"
import "./globals.css"
import { siteDescription, siteName } from "@/lib/utils"

export const metadata: Metadata = {
  title: `${siteName} | ${siteDescription}`,
  description: siteDescription,
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-300">
        <MenuBar />
        <Header />
        {children}
      </body>
    </html>
  )
}
