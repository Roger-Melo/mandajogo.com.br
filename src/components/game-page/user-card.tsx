import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameConditionInfo } from "@/components/game-page/game-condition-info"
import type { Game, GameOwner } from "@/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

type ProposalDialogProps = {
  children: React.ReactNode
  game: Game
  user: GameOwner
}

function ProposalDialog({ children, game, user }: ProposalDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div>
              <h4>Detalhe do Jogo</h4>
              <h2>{game.title}</h2>
            </div>
          </DialogTitle>
          <div>
            <Image width={236} height={294} src={`/covers/${game.platformSlug}/${game.imageCover}`} alt={game.title} className="max-w-[360px] h-auto rounded-sm" />
            <strong>Versão: Normal</strong>
            <strong>Região: América (R1)</strong>

            <UserDetails user={user} />

            <strong>Minha Nota {10}</strong>

            <h2>Faça sua proposta</h2>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Escolha um jogo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>PlayStation 3</SelectLabel>
                  <SelectItem value="bioShock-2">BioShock 2</SelectItem>
                  <SelectItem value="call-of-Duty-modern-warfare-3">Call of Duty: Modern Warfare 3</SelectItem>
                  <SelectItem value="dark-souls-iii-the-fire-fades-edition">Dark Souls III: The Fire Fades Edition</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>PlayStation 4</SelectLabel>
                  <SelectItem value="god-of-war">God of War</SelectItem>
                  <SelectItem value="days-gone">Days Gone</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>PlayStation 5</SelectLabel>
                  <SelectItem value="god-of-war-ragnarok">God Of War: Ragnarök</SelectItem>
                  <SelectItem value="metaphor-refantazio">Metaphor: ReFantazio</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogDescription />

          {/* inner dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Enviar proposta</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Envio de proposta</AlertDialogTitle>
                <AlertDialogDescription />
              </AlertDialogHeader>
              <div>
                <strong>Roger receberá uma notificação sobre o seu interesse em realizar essa troca.</strong>
                <p>Até que sua proposta seja aceita, caso mude de ideia, você poderá cancelá-la a qualquer momento.</p>
                <p>Caso sua proposta seja aceita, você se compromete desde já a contretizá-la, sob o risco de suspensão ou banimento do MandaJogo caso não respeite nossos termos de uso.</p>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Enviar</AlertDialogAction>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>
          <div>
            <div>
              <strong>Mídia</strong>
              <small>Nenhum risco ou marcas de dedos</small>
            </div>
            <div>
              <strong>Caixinha</strong>
              <small>Nenhum risco ou trincas</small>
            </div>
            <div>
              <strong>Encarte</strong>
              <small>Nenhum arranhão ou marcas de dedos</small>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

function UserDetails({ user }: { user: GameOwner }) {
  return (
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
  )
}

export function UserCard({ user, game }: { user: GameOwner, game: Game }) {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <UserDetails user={user} />
        <GameConditionInfo user={user} />
      </div>

      <ProposalDialog game={game} user={user}>
        <Button className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">Fazer proposta</Button>
      </ProposalDialog>
    </li>
  )
}
