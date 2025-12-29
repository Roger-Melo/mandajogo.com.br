import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const gaugesPath = "/svg/gauges"
const conditionsPath = "/svg/conditions"

type SVGPath = typeof gaugesPath | typeof conditionsPath

type Metadata = Record<number, { svgPath: SVGPath; alt: string }>

type GetMetadataArgs = {
  path: SVGPath
  alt: string[]
}

function getMetadata ({ path, alt }: GetMetadataArgs): Metadata {
  return alt.reduce((acc, curr, i) => {
    const svgNumber = path === gaugesPath
      ? i 
      : i <= 5 ? i : 5
    return { ...acc, [i]: { svgPath: `${path}/${svgNumber}.svg`, alt: curr } }
  }, {})
}

export function getBoxCondition(conditionBox = 0) {
  const conditions = [
    "Condição: Sem caixa e sem capa",
    "Condição: Apenas capa (com avarias)",
    "Condição: Apenas capa (sem avarias)",
    "Condição: Avarias significativas",
    "Condição: Pequenos riscos",
    "Condição: Apenas marcas de dedos",
    "Condição: Nenhum risco ou trincas",
    "Condição: Jogo lacrado",
  ]

  const condition: Metadata = getMetadata({ path: conditionsPath, alt: conditions })
  return condition[conditionBox]
}

export function getMediaCondition(conditionMedia = 0) {
  const conditions = [
    "Condição da Mídia: Lascada ou trincada",
    "Condição da Mídia: Riscos significativos",
    "Condição da Mídia: Muitos riscos pequenos",
    "Condição da Mídia: Poucos riscos pequenos",
    "Condição da Mídia: Apenas marcas de dedos",
    "Condição da Mídia: Nenhum risco ou marcas de dedos",
    "Condição da Mídia: Jogo lacrado",
  ]

  const condition: Metadata = getMetadata({ path: conditionsPath, alt: conditions })
  return condition[conditionMedia]
}

export function getBookletCondition(conditionBooklet = 0) {
  const conditions = [
    "Condição do Manual: Sem manual",
    "Condição do Manual: Rasgos, rasuras ou páginas faltantes",
    "Condição do Manual: Avarias significativas",
    "Condição do Manual: Pequenos amassados",
    "Condição do Manual: Cores desbotadas pela luz",
    "Condição do Manual: Apenas marcas de dedos",
    "Condição do Manual: Nenhum arranhão ou marcas de dedos",
    "Condição do Manual: Jogo lacrado",
  ]

  const condition: Metadata = getMetadata({ path: conditionsPath, alt: conditions })
  return condition[conditionBooklet]
}

export function getInterestLevels(enumLevel = 0) {
  const gauges = [
    "Nível de interesse: Minha versão é digital",
    "Nível de interesse: Jogo disponível apenas para exibição",
    "Nível de interesse: Muito baixo. Não troco, prefiro vê-lo empoeirando na estante",
    "Nível de interesse: Baixo. Vai precisar suar para me convencer a trocá-lo",
    "Nível de interesse: Médio. Se pintar uma boa proposta, eu troco",
    "Nível de interesse: Alto. Avaliarei com carinho as ofertas",
    "Nível de interesse: Muito alto. Quero trocar de qualquer jeito",
  ]

  const gauge: Metadata = getMetadata({ path: gaugesPath, alt: gauges })
  return gauge[enumLevel]
}
