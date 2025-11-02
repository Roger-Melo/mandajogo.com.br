import type { Metadata } from "next"
import { Header } from "@/components/header"
import "./globals.css"
import { siteDescription, siteName } from "@/lib/constants"

export const metadata: Metadata = {
  title: `${siteName} | ${siteDescription}`,
  description: siteDescription,
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-300">
        <Header />
        {children}
      </body>
    </html>
  )
}
