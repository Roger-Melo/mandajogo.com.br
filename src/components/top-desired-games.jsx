import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TopDesiredGames () {
  return (
    <div className="px-4 py-8 bg-slate-950 lg:py-16">
      <h2 className="font-bold uppercase text-primary-blue mb-6">Os mais desejados</h2>
      <ul>
        <li className="border-2 rounded-2xl border-white/20 p-4">
          <img src="/covers/ps5/astro-bot.jpg" alt="Astro Bot" />
          <h3 className="text-3xl uppercase font-semibold mt-4">Astro Bot</h3>
          <ul>
            <Badge>PS5</Badge>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
          <button>{"->"}</button>
        </li>
      </ul>
    </div>
  )
}
