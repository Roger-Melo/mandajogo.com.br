import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameConditionInfo } from "@/components/game-page/game-condition-info"
import type { Game, GameOwner } from "@/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

type ProposalDialogProps = {
  children: React.ReactNode
  game: Game
  user: GameOwner
  userCollectionData: string
}

function GamesSelect() {
  console.log("renderizou GamesSelect")
  return (
    <Select>
      <SelectTrigger className="w-full">
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
  )
}

function ProposalDialog({ children, game, user, userCollectionData }: ProposalDialogProps) {
  console.log("userCollectionData:", userCollectionData)
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="text-center overflow-y-auto max-h-9/10 p-4 bg-slate-950 border-2 border-slate-700">
        <div>
          <DialogHeader>
            <DialogTitle className="text-base font-normal mb-1">Detalhe do Jogo</DialogTitle>
            <div className="mb-2">
              <Image width={236} height={294} src={`/covers/${game.platformSlug}/${game.imageCover}`} alt={game.title} className="w-[160px] h-auto rounded-sm mx-auto" />
              <h2 className="text-2xl font-bold mt-2 mb-1">{game.title}</h2>
              <strong className="text-sm">Versão:</strong>{" "}<span className="text-sm">Normal</span>
              {" | "}
              <strong className="text-sm">Região:</strong>{" "}<span className="text-sm">América (R1)</span>
            </div>
            <DialogDescription />
            <div className="flex gap-4 items-center justify-between">
              <UserDetails user={user} type="horizontal" />
              <div className="flex items-center gap-2">
                <strong className="font-normal text-sm text-right">Minha Nota</strong>
                <span className="text-2xl font-bold">{10}</span>
              </div>
            </div>
          </DialogHeader>
          <div className="outline-2 outline-sky-600 my-4">
            <h2>Faça sua proposta</h2>
            <GamesSelect />

            {/* inner dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full">Enviar proposta</Button>
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
          </div>
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
        </div>
      </DialogContent>
    </Dialog>
  )
}

type UserDetailsProps = {
  user: GameOwner
  type: "vertical" | "horizontal"
}

function UserDetails({ user, type }: UserDetailsProps) {
  return (
    <section className={cn("flex justify-center items-center", type === "vertical" ? "ml-auto flex-col" : "flex-row gap-2")}>
      <Link href="#">
        <Image src={user.imageAvatar} width={250} height={250} alt={`Imagem ${user.name}`} className={cn("rounded-full hover:opacity-80", type === "vertical" ? "w-20" : "w-12")} />
      </Link>
      <div className={cn("", type === "vertical" ? "text-2xl text-center" : "text-left flex flex-col gap-1")}>
        <Link href="#">
          <h3 className={cn("font-semibold hover:text-slate-400", type === "vertical" ? "mt-2" : "leading-none")}>{user.name.split(" ")[0]}</h3>
        </Link>
        {type === "vertical" && <p className="text-xs text-slate-500 text-center">{user.city} / {user.state}</p>}
        <Badge className={cn("bg-slate-800 text-slate-400", type === "vertical" ? "mt-2" : "text-[.7rem]")}>{user.exchangesCount} trocas</Badge>
      </div>
    </section>
  )
}

export function UserCard({ user, game, userCollectionData }: { user: GameOwner; game: Game; userCollectionData: string }) {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <UserDetails user={user} type="vertical" />
        <GameConditionInfo user={user} />
      </div>

      <ProposalDialog game={game} user={user} userCollectionData={userCollectionData}>
        <Button className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">Fazer proposta</Button>
      </ProposalDialog>
    </li>
  )
}
