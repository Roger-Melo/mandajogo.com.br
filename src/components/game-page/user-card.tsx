import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameConditionInfo } from "@/components/game-page/game-condition-info"
import { type GameOwner } from "@/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function ProposalDialog({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Está certo disso?</DialogTitle>
          <DialogDescription>
            Descrição do Dialog

            {/* inner dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>Clica aqui</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Está certo disso?</DialogTitle>
                  <DialogDescription>
                    Descrição do Dialog interno
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export function UserCard({ user }: { user: GameOwner }) {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <section className="flex flex-col justify-center items-center ml-auto">
          <Link href="#">
            <Image src={user.imageAvatar} width={250} height={250} alt={`Imagem ${user.name}`} className="rounded-full w-20 hover:opacity-80" />
          </Link>
          <Link href="#">
            <h3 className="text-2xl font-semibold mt-2 hover:text-slate-400 text-center">{user.name.split(" ")[0]}</h3>
          </Link>
          <p className="text-xs text-slate-500 text-center">{user.city} / {user.state}</p>
          <Badge className="bg-slate-800 text-slate-400 mt-2">{user.exchangesCount} trocas</Badge>
        </section>
        <GameConditionInfo user={user} />
      </div>

      <ProposalDialog>
        <Button className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">Fazer proposta</Button>
      </ProposalDialog>
    </li>
  )
}
