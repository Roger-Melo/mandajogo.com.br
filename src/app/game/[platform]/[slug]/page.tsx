import Image from "next/image"
import { HandHelping, Heart, Star } from "lucide-react"
import { game } from "@/db/sample-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type GamePageProps = {
  params: Promise<{ slug: string; platform: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug, platform } = await params
  console.log("slug:", slug, "platform:", platform)
  return (
    <main className="pb-10 bg-radial-[at_25%_25%] from-primary-blue/10 to-slate-950 to-75%">
      <section className="flex flex-col gap-8 px-4 py-8 md:max-w-site-width md:mx-auto lg:py-16 lg:px-10 xl:px-0 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6">
        <article className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-6">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start">
              <Image width={236} height={294} src={`/covers/${game.platformSlug}/${game.imageCover}`} alt={game.title} className="max-w-[360px] h-auto rounded-sm lg:w-36" />
              <Image unoptimized width={112} height={30} className="h-auto w-20 my-4" src={`/logos/${game.platformSlug}.svg`} alt={`${game.platformName} logo`} />
            </div>
            <ul className="flex gap-4 justify-center sm:gap-8 lg:flex-col lg:gap-2">
              <li className="flex gap-1 items-center lg:gap-2">
                <Heart className="w-4 translate-y-[1px] sm:w-6" />
                <span className="text-xs sm:text-base">
                  <span className="font-bold">{game.wishes}</span>{" "}
                  Desejos
                </span>
              </li>
              <li className="flex gap-1 items-center lg:gap-2">
                <HandHelping className="w-4 translate-y-[1px] sm:w-6" />
                <span className="text-xs sm:text-base">
                  <span className="font-bold">{game.offers}</span>{" "}
                  Ofertas
                </span>
              </li>
              <li className="flex gap-1 items-center lg:gap-2">
                <Star className="w-4 translate-y-[1px] sm:w-6" />
                <span className="text-xs sm:text-base">
                  Nota{" "}
                  <span className="font-bold">{game.scoreMandaJogo}</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="md:text-center md:my-8 lg:max-w-none lg:my-0 lg:text-left">
            <div className="my-6 lg:mt-0">
              <small className="block text-sm text-slate-400 sm:max-w-xl sm:mx-auto">{game.platformName}</small>
              <h1 className="text-3xl font-bold mt-1 mb-3 sm:max-w-xl sm:mx-auto lg:text-5xl">{game.title}</h1>
              <p className="text-slate-300 sm:max-w-xl sm:mx-auto lg:text-xl">{game.description}</p>
            </div>

            <ul className="flex gap-3 w-full justify-between mb-8 sm:w-sm sm:gap-4 sm:mx-auto lg:mx-0">
              <li className="w-full">
                <Button className="bg-primary-yellow pb-3 w-full text-slate-900" asChild>
                  <Link href="#">
                    <Heart className="translate-y-[1px]" />Eu quero
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button className="bg-primary-blue pb-3 w-full" asChild>
                  <Link href="#">
                    <Star className="translate-y-[1px]" />Eu tenho
                  </Link>
                </Button>
              </li>
            </ul>

            <h3>Proprietários</h3>{/* Interessados | Ficha Técnica */}
            {/*
              <form>
                <label>Versão</label>
                <select>
                  <option>Todos</option>
                  <option>Normal</option>
                  <option>Greatest Hits</option>
                  <option>Platinum</option>
                  <option>Game of the Year</option>
                  <option>Ultimate</option>
                  <option>Edição de Colecionador</option>
                  <option>Outras Edições Especiais</option>
                </select>

                <label>Região</label>
                <select>
                  <option>Todos</option>
                  <option>América (R1)</option>
                  <option>Europa (R2)</option>
                  <option>Asia (R3)</option>
                  <option>Oceania (R4)</option>
                </select>

                <label>Estado</label>
                <select>
                  <option>Todos</option>
                  <option>Acre</option>
                  <option>Alagoas</option>
                  <option>Amapá</option>
                  <option>Amazonas</option>
                  <option>Bahia</option>
                  <option>Ceará</option>
                  <option>Distrito Federal</option>
                  <option>Espírito Santo</option>
                  <option>Goiás</option>
                  <option>Maranhão</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                  <option>Minas Gerais</option>
                  <option>Pará</option>
                  <option>Paraíba</option>
                  <option>Paraná</option>
                  <option>Pernambuco</option>
                  <option>Piauí</option>
                  <option>Rio de Janeiro</option>
                  <option>Rio Grande do Norte</option>
                  <option>Rio Grande do Sul</option>
                  <option>Rondônia</option>
                  <option>Roraima</option>
                  <option>Santa Catarina</option>
                  <option>São Paulo</option>
                  <option>Sergipe</option>
                  <option>Tocantins</option>
                </select>

                <label>Outros</label>
                <input type="checkbox" />Apenas Pessoas que Sigo
              </form>
            */}
            {/*
              <table>
                <thead>
                  <tr>
                    <th>Usuário</th>
                    <th>Interesse</th>
                    <th>Mídia</th>
                    <th>Caixinha</th>
                    <th>Encarte</th>
                    <th>Distância</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <div>
                          <div>
                            <a href="/profile/aryhoo">
                              <img width={50} height={50} src="https://cdn.trocajogo.net/users/a66dc119-b704-45f0-b69a-8282b11e8167.jpg" alt="Rafael" title="Rafael" />
                            </a>
                          </div>
                          <div>
                            <a href="/profile/aryhoo">
                              <b>Rafael</b>
                            </a>&nbsp;
                            <span title="Trocas Realizadas">0</span>
                            <br />
                            <small>Vitória / ES</small>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img alt="" title="" src="https://cdn.trocajogo.net/static/gauge5.svg" />
                    </td>
                    <td>
                      <div>
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                              <path d="M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z">
                            </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                              <path d="M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>N/A</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            */}
            {/* pagination */}
            <p>1, 2, 3, 4, 5, 6, 7...</p>
          </div>
        </article>

        <aside className="space-y-6 mb-48 md:px-6 lg:px-0">
          <div className="space-y-4">
            <h3 className="text-lg text-slate-400">Vídeo Promocional</h3>
            <iframe className="aspect-video w-full" src={`https://www.youtube.com/embed/${game.urlVideo}`} allowFullScreen />
          </div>
          <div className="hidden lg:block lg:space-y-4">
            <h3 className="text-lg text-slate-400">Jogos Similares</h3>
            {/* games list */}
          </div>
        </aside>
      </section>
    </main>
  )
}
