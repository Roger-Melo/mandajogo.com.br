import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBoxCondition(conditionBox = 0) {
  const commonPath = `/svg/conditions`
  const conditions = {
    0: { svgPath: `${commonPath}/0.svg`, alt: "Condição: Sem caixa e sem capa" },
    1: { svgPath: `${commonPath}/1.svg`, alt: "Condição: Apenas capa (com avarias)" },
    2: { svgPath: `${commonPath}/2.svg`, alt: "Condição: Apenas capa (sem avarias)" },
    3: { svgPath: `${commonPath}/3.svg`, alt: "Condição: Avarias significativas" },
    4: { svgPath: `${commonPath}/4.svg`, alt: "Condição: Pequenos riscos" },
    5: { svgPath: `${commonPath}/5.svg`, alt: "Condição: Apenas marcas de dedos" },
    6: { svgPath: `${commonPath}/5.svg`, alt: "Condição: Nenhum risco ou trincas" },
    7: { svgPath: `${commonPath}/5.svg`, alt: "Condição: Jogo lacrado" },
  }
  // @ts-expect-error temp
  return conditions[conditionBox]
}

export function getMediaCondition(conditionMedia = 0) {
  const commonPath = `/svg/conditions`
  const conditions = {
    0: { svgPath: `${commonPath}/0.svg`, alt: "Condição da Mídia: Lascada ou trincada" },
    1: { svgPath: `${commonPath}/1.svg`, alt: "Condição da Mídia: Riscos significativos" },
    2: { svgPath: `${commonPath}/2.svg`, alt: "Condição da Mídia: Muitos riscos pequenos" },
    3: { svgPath: `${commonPath}/3.svg`, alt: "Condição da Mídia: Poucos riscos pequenos" },
    4: { svgPath: `${commonPath}/4.svg`, alt: "Condição da Mídia: Apenas marcas de dedos" },
    5: { svgPath: `${commonPath}/5.svg`, alt: "Condição da Mídia: Nenhum risco ou marcas de dedos" },
    6: { svgPath: `${commonPath}/5.svg`, alt: "Condição da Mídia: Jogo lacrado" },
  }
  // @ts-expect-error temp
  return conditions[conditionMedia]
}

export function getBookletCondition(conditionBooklet = 0) {
  const commonPath = `/svg/conditions`
  const conditions = {
    0: { svgPath: `${commonPath}/0.svg`, alt: "Condição do Manual: Sem manual" },
    1: { svgPath: `${commonPath}/1.svg`, alt: "Condição do Manual: Rasgos, rasuras ou páginas faltantes" },
    2: { svgPath: `${commonPath}/2.svg`, alt: "Condição do Manual: Avarias significativas" },
    3: { svgPath: `${commonPath}/3.svg`, alt: "Condição do Manual: Pequenos amassados" },
    4: { svgPath: `${commonPath}/4.svg`, alt: "Condição do Manual: Cores desbotadas pela luz" },
    5: { svgPath: `${commonPath}/5.svg`, alt: "Condição do Manual: Apenas marcas de dedos" },
    6: { svgPath: `${commonPath}/5.svg`, alt: "Condição do Manual: Nenhum arranhão ou marcas de dedos" },
    7: { svgPath: `${commonPath}/5.svg`, alt: "Condição do Manual: Jogo lacrado" },
  }
  // @ts-expect-error temp
  return conditions[conditionBooklet]
}

export function getInterestLevels(enumLevel = 0) {
  const commonPath = `/svg/gauges`
  const gauges = {
    0: { svgPath: `${commonPath}/0-digital.svg`, alt: "Nível de interesse: Minha versão é digital" },
    1: { svgPath: `${commonPath}/1-somente-exibicao.svg`, alt: "Nível de interesse: Jogo disponível apenas para exibição" },
    2: { svgPath: `${commonPath}/2-muito-baixo.svg`, alt: "Nível de interesse: Muito baixo. Não troco, prefiro vê-lo empoeirando na estante" },
    3: { svgPath: `${commonPath}/3-baixo.svg`, alt: "Nível de interesse: Baixo. Vai precisar suar para me convencer a trocá-lo" },
    4: { svgPath: `${commonPath}/4-medio.svg`, alt: "Nível de interesse: Médio. Se pintar uma boa proposta, eu troco" },
    5: { svgPath: `${commonPath}/5-alto.svg`, alt: "Nível de interesse: Alto. Avaliarei com carinho as ofertas" },
    6: { svgPath: `${commonPath}/6-muito-alto.svg`, alt: "Nível de interesse: Muito alto. Quero trocar de qualquer jeito" },
  }
  // @ts-expect-error temp
  return gauges[enumLevel]
}
