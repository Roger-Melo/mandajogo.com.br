import type { Metadata } from "next"
import { Header } from "@/components/header"
import { MenuBar } from "@/components/menu-bar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-200">
        <MenuBar />
        <Header />
        {children}
      </body>
    </html>
  )
}
