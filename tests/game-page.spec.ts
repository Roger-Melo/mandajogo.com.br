import { test, expect, type Page } from "@playwright/test"
import { ownersPerPage } from "@/lib/constants"
import prisma from "@/lib/db"

async function getGameOwners() {
  const gameOwners = await prisma.gameOwner.findMany({ orderBy: { enumLevel: "desc" } })
  const totalCount = await prisma.gameOwner.count()
  return { gameOwners, totalCount }
}

function getGameOwnersList(page: Page) {
  return page.getByTestId("game-owners-list")
}

test.describe("GamePage", () => {
  test.beforeEach(async ({ page }) => {
    const gameLink = "/game/ps5/elden-ring"
    await page.goto(gameLink)
    await page.waitForURL(gameLink)
    await expect(page).toHaveURL(gameLink)
  })

  test("should display the game owners list", async ({ page }: { page: Page }) => {
    const gameOwnersList = getGameOwnersList(page)
    await gameOwnersList.isVisible()
  })

  test("should display the initial game owner cards", async ({ page }: { page: Page }) => {
    const { gameOwners } = await getGameOwners()
    const initialPageGameOwners = gameOwners.slice(0, ownersPerPage)
    const gameOwnersList = getGameOwnersList(page)

    for (const initialGameOwner of initialPageGameOwners) {
      const ownerName = gameOwnersList.getByRole("heading", { name: initialGameOwner.name })
      await expect(ownerName).toBeVisible()
      const ownerImg = gameOwnersList.getByAltText(`Imagem ${initialGameOwner.name}`)
      await expect(ownerImg).toBeVisible()
    }

    const proposalButtons = gameOwnersList.getByRole("button", { name: "Fazer proposta" })
    await expect(proposalButtons).toHaveCount(ownersPerPage)
  })
})
