## GPT o4 Prompt

Tenho um componente GameCard e estou pensando na possibilidade de reutilizá-lo.

Quando ele for usado na section "games mais desejados", ele irá exibir (como no código abaixo):

* título
* imagem da capa
* link para página do jogo
* badges list (plataforma, desejado, ofertado, avaliação, capa)

Quando ele for usado na section "novos games", ele...

Irá exibir:

* título
* imagem da capa
* link para página do jogo
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

You **should reuse the `GameCard` component**, but make it **configurable through props** to handle both use cases.

The core layout and responsibilities of the card (title, cover image, link) are shared, and diverging parts (badges list vs. description + console tags) can be toggled via conditional rendering. This improves maintainability, consistency, and reduces code duplication.

---

### ✅ Suggested Changes:

You can extend `GameCard` to receive flags like:

```ts
type GameCardProps = {
  title: string
  platform: string
  desired: number
  offered: number
  rating: number
  cover: string
  description?: string
  availableConsoles?: string[]
  showBadges?: boolean
}
```

Then, update the rendering logic:

```tsx
function GameCard ({
  title,
  platform,
  desired,
  offered,
  rating,
  cover,
  description,
  availableConsoles,
  showBadges = true
}: GameCardProps) {
  const badgeTexts = [platform, `${desired} desejos`, `${offered} ofertas`, `Nota ${rating}`]
  const gamePageLink = "#"

  return (
    <li className="w-full gap-4 sm:w-[calc(50%-0.5rem)] border-2 rounded-2xl border-white/20 p-4 flex flex-col lg:w-[calc(33%-0.5rem)]">
      <Link href={gamePageLink} className="ssm:flex-shrink-0 ssm:w-[183px] sm:mx-auto">
        <Image width={236} height={294} src={cover} alt={title} className="mx-auto w-full h-auto" />
      </Link>

      <div className="ssm:flex ssm:flex-col ssm:justify-between ssm:w-full sm:h-full">
        <Link href={gamePageLink}>
          <h3 className="wrap-anywhere text-3xl text-center uppercase font-semibold my-4 ssm:text-left ssm:mt-0 sm:text-center">{title}</h3>
        </Link>

        {description && (
          <p className="text-sm text-muted-foreground mb-4">
            {description}
          </p>
        )}

        {availableConsoles?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {availableConsoles.map((console) => (
              <GameBadge key={console} text={console} />
            ))}
          </ul>
        )}

        <div className="flex justify-between items-center gap-4 ssm:items-end">
          {showBadges && (
            <ul>
              {badgeTexts.map((text) => <GameBadge key={text} text={text} />)}
            </ul>
          )}

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

### ✅ Usage Examples:

**Most Desired Games**:

```tsx
<GameCard
  title="Zelda"
  platform="Switch"
  desired={100}
  offered={50}
  rating={4.9}
  cover="/zelda.jpg"
  showBadges={true}
/>
```

**New Games**:

```tsx
<GameCard
  title="Hollow Knight"
  platform="PS5"
  desired={0}
  offered={0}
  rating={0}
  cover="/hk.jpg"
  description="A beautiful and challenging metroidvania adventure."
  availableConsoles={["PS5", "Xbox Series", "Switch"]}
  showBadges={false}
/>
```

Would you like me to refactor your existing JSX with this prop-based approach and extract a separate interface for better TypeScript inference?

