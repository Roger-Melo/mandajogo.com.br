import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GameConditionInfo } from "@/components/game-page/game-condition-info"
import type { Game, GameOwner, LoggedUserGame } from "@/types"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
// import { game } from "@/db/sample-data/game"

type ProposalDialogProps = {
  children: React.ReactNode
  game: Game
  user: GameOwner
  loggedUserGamesCollection: LoggedUserGame[]
}

type GamesSelectProps = {
  loggedUserGamesCollection: LoggedUserGame[]
}

function GamesSelect({ loggedUserGamesCollection }: GamesSelectProps) {
  const loggedUserGamesGroupedByPlatform = Object
    .groupBy(loggedUserGamesCollection, (obj) => obj.platformName)
  const platforms = Object.keys(loggedUserGamesGroupedByPlatform)
  return (
    <Select>
      <SelectTrigger className="w-full border-2 border-slate-600">
        <SelectValue placeholder="Escolha um jogo" />
      </SelectTrigger>
      <SelectContent className="bg-slate-900 text-slate-300">
        {platforms.map((platform) =>
          <SelectGroup key={platform}>
            <SelectLabel>{platform}</SelectLabel>
            {loggedUserGamesGroupedByPlatform[platform]?.map((game) =>
              <SelectItem key={game.id} value={`${game.platformSlug}/${game.slug}`} className="focus:bg-primary-yellow focus:text-primary-blue focus:font-semibold">
                {game.title}
              </SelectItem>
            )}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  )
}

function ProposalDialog({ children, game, user, loggedUserGamesCollection }: ProposalDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent forceMount={undefined} className="text-center overflow-y-auto max-h-9/10 p-4 bg-slate-950 border-2 border-slate-700">
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
          <div className="my-4 space-y-4">
            <h2>Faça sua proposta</h2>
            <GamesSelect loggedUserGamesCollection={loggedUserGamesCollection} />

            {/* inner dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-primary-blue">Enviar proposta</Button>
                {/* <Button className="w-full bg-primary-yellow text-primary-blue">Enviar proposta</Button> */}
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

type UserCardProps = {
  user: GameOwner
  game: Game
  loggedUserGamesCollection: LoggedUserGame[]
}

export function UserCard({ user, game, loggedUserGamesCollection }: UserCardProps) {
  return (
    <li className="border-2 border-slate-800 rounded-2xl text-slate-300 flex flex-col gap-4 justify-between">
      <div className="grid grid-cols-2 items-center gap-6 pt-4 px-4 xsm:gap-14 sm:gap-6">
        <UserDetails user={user} type="vertical" />
        <GameConditionInfo user={user} />
      </div>

      <ProposalDialog game={game} user={user} loggedUserGamesCollection={loggedUserGamesCollection}>
        <Button className="w-full rounded-b-xl rounded-tl-none rounded-tr-none py-5 bg-primary-blue hover:bg-primary-yellow hover:text-primary-blue">Fazer proposta</Button>
      </ProposalDialog>
    </li>
  )
}
