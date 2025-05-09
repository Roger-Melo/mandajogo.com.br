## GPT o3 Prompt

Tenho um componente GameCard e estou pensando na possibilidade de reutilizá-lo.

Quando ele for usado na section "games mais desejados", ele irá exibir (como no código abaixo):

* título
* imagem da capa
* badges list (plataforma, desejado, ofertado, avaliação, capa)

Quando ele for usado na section "novos games", ele...

Irá exibir:

* título
* imagem da capa
* descrição do jogo
* marcas dos consoles/plataformas disponíveis

Irá ocultar:

* badges list (plataforma, desejado, ofertado, avaliação, capa)

Faz mais sentido criar um outro componente ou apenas reutilizar o componente GameCard?

sempre responda em inglês

```tsx
function GameCard ({ title, platform, desired, offered, rating, cover }) {
  const badgeTexts = [platform, `${desired} desejos`, `${offered} ofertas`, `Nota ${rating}`]
  const gamePageLink = "#"
  return (
    <li className="w-full gap-4 sm:w-[calc(50%-0.5rem)] border-2 rounded-2xl border-white/20 p-4 flex flex-col lg:w-[calc(33%-0.5rem)]">
      {/* image */}
      <Link href={gamePageLink} className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={cover} alt={title} className="mx-auto w-full h-auto" />
      </Link>

      <div className="ssm:flex ssm:flex-col ssm:justify-between ssm:w-full sm:h-full">
        {/* title */}
        <Link href={gamePageLink}>
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center">{title}</h3>
        </Link>

        {/* bottom container */}
        <div className="flex justify-between items-center gap-4 ssm:items-end">
          {/* badges list */}
          <ul>
            {badgeTexts.map((text) => <GameBadge key={text} text={text} />)}
          </ul>

          {/* link game page */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild size="icon" className="bg-transparent border-white/20 border-2 hover:bg-transparent hover:cursor-pointer hover:border-white/10">
                  <Link href={gamePageLink}>
                    <MoveRight />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver jogo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </li>
  )
}
```

---

## Answer

---

The user is asking if it's better to create a new component or reuse the existing GameCard component, given its dual role: for "most desired games" and "new games" sections. The current component includes title, cover image, and badges for the first, and additionally description and console/platform marks for the second. Since there are some differences, they could use a "variant" prop to adjust the behavior, or break the component into smaller pieces. Given their preference for functional style, TypeScript, and Next.js, I think reusing with a "variant" prop makes the most sense.


Thought for 18 seconds


**Reuse a single “core” component, then wrap it for each context.**

---

### Why this approach scales better than two separate components

| Option                                          | Pros                                                                                                                                                        | Cons                                                                                                                                                          |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Two completely different components**         | • Each file is simple and explicit                                                                                                                          | • Code/markup duplicated <br>• Hard to keep visual details in sync (padding, colors, a11y) <br>• Future changes (e.g. redesign the header) must be done twice |
| **One giant component with many `if` branches** | • No duplication                                                                                                                                            | • Prop-surface grows quickly <br>• Type signatures become union-heavy and confusing <br>• Hidden coupling between unrelated variants                          |
| **➜ One *base* + thin “variant” wrappers**      | • Shared skeleton lives in one place <br>• Variants expose only the props they need (good ergonomics & type-safety) <br>• Adding a third variant is trivial | • Small indirection layer (two components instead of one)                                                                                                     |

The third option matches React’s “composition over configuration” mantra and keeps your codebase idiomatic to the functional style you prefer.

---

### Minimal TypeScript sketch (no semicolons, double quotes)

```tsx
import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

type CoreProps = {
  title: string
  coverSrc: string
  children: ReactNode          // area below the title
}

function GameCardCore({ title, coverSrc, children }: CoreProps) {
  return (
    <li className="w-full gap-4 sm:w-[calc(50%-0.5rem)] border-2 rounded-2xl border-white/20 p-4 flex flex-col lg:w-[calc(33%-0.5rem)]">
      <Link href="#" className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={coverSrc} alt={title} className="mx-auto w-full h-auto" />
      </Link>

      <div className="ssm:flex ssm:flex-col ssm:justify-between ssm:w-full sm:h-full">
        <Link href="#">
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center">
            {title}
          </h3>
        </Link>

        {children}
      </div>
    </li>
  )
}
```

---

#### Variant ① – “Most Wanted” card

```tsx
type DesiredCardProps = {
  title: string
  coverSrc: string
  platform: string
  desired: number
  offered: number
  rating: number
}

function DesiredGameCard(props: DesiredCardProps) {
  const badgeTexts = [
    props.platform,
    `${props.desired} desejos`,
    `${props.offered} ofertas`,
    `Nota ${props.rating}`
  ]

  return (
    <GameCardCore title={props.title} coverSrc={props.coverSrc}>
      <div className="flex justify-between items-center gap-4 ssm:items-end">
        <ul>
          {badgeTexts.map(text => <GameBadge key={text} text={text} />)}
        </ul>
        <GameLinkIcon />
      </div>
    </GameCardCore>
  )
}
```

#### Variant ② – “New Releases” card

```tsx
type NewCardProps = {
  title: string
  coverSrc: string
  description: string
  consoles: string[]           // e.g. ["PS5", "Switch"]
}

function NewGameCard({ title, coverSrc, description, consoles }: NewCardProps) {
  return (
    <GameCardCore title={title} coverSrc={coverSrc}>
      <p className="my-2 text-sm leading-snug">{description}</p>

      <div className="flex justify-between items-end">
        <ul className="flex flex-wrap gap-2">
          {consoles.map(c => <ConsoleChip key={c} label={c} />)}
        </ul>
        <GameLinkIcon />
      </div>
    </GameCardCore>
  )
}
```

> **Note**
> `GameLinkIcon`, `GameBadge`, and `ConsoleChip` would be tiny pure-presentational components; they keep the variants readable and testable.

---

### Benefits you get immediately

1. **Strong typing** – each wrapper exports only the props that matter for that layout; consumers can’t accidentally pass the wrong combination.
2. **Single source of truth** – spacing, borders, hover states, tooltip behavior, etc. live in `GameCardCore` once.
3. **Easy future variants** – a “Top Rated” section later? Wrap `GameCardCore` again with its own child markup.
4. **Cleaner tests** – Playwright or React Testing Library specs target each variant’s public API, not internal booleans.

---

### When would you split into completely different components?

*If* the overall structure diverges so much that only the cover image is shared—or if design tokens (color, radius, font size) change per context—then duplication might be simpler. Today, though, the two versions still share \~70 % DOM, so the composition approach pays off.

---

**TL;DR**
Keep `GameCardCore` as the shared skeleton and create slim wrapper components (`DesiredGameCard`, `NewGameCard`) for each section. You avoid duplication while giving every context a clean, self-documenting API.

