import Image from "next/image"
import { cn } from "@/lib/utils"
import { eldenRing as gameData } from "@/db/sample-data"

type GamePageProps = {
  params: Promise<{ slug: string; platform: string }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug, platform } = await params
  console.log("slug:", slug, "platform:", platform)
  return (
    <main className="pb-10">
      <section className="px-4 py-8 bg-slate-950 lg:py-16 md:max-w-site-width md:mx-auto">
        <ul className="flex gap-2 justify-center">
          <li>{gameData.wishes} Desejos</li>
          <li>{gameData.offers} Ofertas</li>
          <li>Nota {gameData.scoreMandaJogo}</li>
        </ul>

        <article>
          <Image width={236} height={294} src="/covers/ps5/elden-ring.jpg" alt="Elden Ring" className="mx-auto w-full h-auto" />
          <Image unoptimized width={112} height={30} className={cn("h-auto", "w-52")} src={`/logos/ps5.svg`} alt={`PlayStation 5 logo`} />
        </article>

        <small>Playstation 5</small>
        <h1>Elden Ring</h1>
        <p>Elden Ring certamente se provou o jogo mais ambicioso da FromSoftware e removeu qualquer preocupação de mudanças drásticas. Tudo que foi adicionado vem para acrescentar e enaltecer o que a empresa faz de melhor. O escopo maior da experiência é um presente e um deleite aos fãs, que ficarão felizes em saber que há mais conteúdo e de maior qualidade.</p>

        <ul>
          <li>
            <button>Eu quero</button>
          </li>
          <li>
            <button>Eu tenho</button>
          </li>
        </ul>

        <button>Proprietários</button>{/* Interessados | Ficha Técnica */}
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

        <aside>
          <h3>Video Promocional</h3>
          {/* youtube video */}
          <h3>Jogos Similares</h3>
          {/* games list */}
        </aside>
      </section>
    </main>
  )
}
