import { Button } from "@/components/ui/button"
import { UserRoundPlus } from "lucide-react"

const siteName = "MandaJogo"

export function TopDesiredGames () {
  return (
    <div className="px-4 py-8 bg-slate-950 lg:py-16">
      <h2>Games mais desejados</h2>
      <ul>
        <li>
          <img src="" alt="" />
          <h3>Title</h3>
          <ul>
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
