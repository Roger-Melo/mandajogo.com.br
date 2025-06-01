import { getInterestLevels } from "@/lib/utils"

describe("Utils", () => {
  describe("getInterestLevels | Happy Path", () => {
    it("should return digital version object", () => {
      const obj = getInterestLevels(0)
      expect(obj.svgPath === "/svg/gauges/0-digital.svg")
      expect(obj.alt === "Nível de interesse: Minha versão é digital")
    })

    it("should return high level object", () => {
      const obj = getInterestLevels(6)
      expect(obj.svgPath === "/svg/gauges/6-muito-alto.svg")
      expect(obj.alt === "Nível de interesse: Muito alto. Quero trocar de qualquer jeito")
    })
  })

  describe("getInterestLevels | Unhappy Path", () => {
    it("should return digital version object when no argument is passed", () => {
      const obj = getInterestLevels()
      expect(obj.svgPath === "/svg/gauges/0-digital.svg")
      expect(obj.alt === "Nível de interesse: Minha versão é digital")
    })
  })
})
