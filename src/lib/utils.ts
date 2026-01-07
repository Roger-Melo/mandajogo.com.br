import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const gaugesBasePath = "/svg/gauges"
const conditionsBasePath = "/svg/conditions"

type SVGPath = `${typeof gaugesBasePath | typeof conditionsBasePath}/${number}.svg`

type Metadata = Record<number, { svgPath: SVGPath; alt: string }>

type GetMetadataArgs = {
  kind: keyof typeof metadataGroups
  index: number
}

const metadataGroups = {
  mediaCondition: [
    { path: conditionsBasePath, alt: "Condição da Mídia: Lascada ou trincada" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Riscos significativos" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Muitos riscos pequenos" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Poucos riscos pequenos" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Apenas marcas de dedos" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Nenhum risco ou marcas de dedos" },
    { path: conditionsBasePath, alt: "Condição da Mídia: Jogo lacrado" },
  ],
  boxCondition: [
    { path: conditionsBasePath, alt: "Condição: Sem caixa e sem capa" },
    { path: conditionsBasePath, alt: "Condição: Apenas capa (com avarias)" },
    { path: conditionsBasePath, alt: "Condição: Apenas capa (sem avarias)" },
    { path: conditionsBasePath, alt: "Condição: Avarias significativas" },
    { path: conditionsBasePath, alt: "Condição: Pequenos riscos" },
    { path: conditionsBasePath, alt: "Condição: Apenas marcas de dedos" },
    { path: conditionsBasePath, alt: "Condição: Nenhum risco ou trincas" },
    { path: conditionsBasePath, alt: "Condição: Jogo lacrado" },
  ],
  bookletCondition: [
    { path: conditionsBasePath, alt: "Condição do Manual: Sem manual" },
    { path: conditionsBasePath, alt: "Condição do Manual: Rasgos, rasuras ou páginas faltantes" },
    { path: conditionsBasePath, alt: "Condição do Manual: Avarias significativas" },
    { path: conditionsBasePath, alt: "Condição do Manual: Pequenos amassados" },
    { path: conditionsBasePath, alt: "Condição do Manual: Cores desbotadas pela luz" },
    { path: conditionsBasePath, alt: "Condição do Manual: Apenas marcas de dedos" },
    { path: conditionsBasePath, alt: "Condição do Manual: Nenhum arranhão ou marcas de dedos" },
    { path: conditionsBasePath, alt: "Condição do Manual: Jogo lacrado" },
  ],
  interestLevel: [
    { path: gaugesBasePath, alt: "Nível de interesse: Minha versão é digital" },
    { path: gaugesBasePath, alt: "Nível de interesse: Jogo disponível apenas para exibição" },
    { path: gaugesBasePath, alt: "Nível de interesse: Muito baixo. Não troco, prefiro vê-lo empoeirando na estante" },
    { path: gaugesBasePath, alt: "Nível de interesse: Baixo. Vai precisar suar para me convencer a trocá-lo" },
    { path: gaugesBasePath, alt: "Nível de interesse: Médio. Se pintar uma boa proposta, eu troco" },
    { path: gaugesBasePath, alt: "Nível de interesse: Alto. Avaliarei com carinho as ofertas" },
    { path: gaugesBasePath, alt: "Nível de interesse: Muito alto. Quero trocar de qualquer jeito" },
  ]
} as const

export function getMetadata ({ kind, index = 0 }: GetMetadataArgs) {
  const metadata = metadataGroups[kind].reduce<Metadata>((acc, curr, i) => {
    const svgNumber = curr.path === gaugesBasePath
      ? i 
      : i <= 5 ? i : 5
    return { ...acc, [i]: { svgPath: `${curr.path}/${svgNumber}.svg`, alt: curr.alt } }
  }, {})
  
  return metadata[index]
}
