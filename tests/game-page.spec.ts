import { test, expect, type Page } from "@playwright/test"
import { ownersPerPage } from "@/lib/constants"
import prisma from "@/lib/db"

async function getGameOwners({ take = ownersPerPage, page = 1 } = {}) {
  const gameOwners = await prisma.gameOwner.findMany({
    orderBy: { enumLevel: "desc" },
    take,
    skip: (page - 1) * take,
  })

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

  test("should display the initial game owners", async ({ page }: { page: Page }) => {
    const { gameOwners } = await getGameOwners()
    const gameOwnersList = getGameOwnersList(page)

    for (const gameOwner of gameOwners) {
      const ownerName = gameOwnersList.getByRole("heading", { name: gameOwner.name })
      await expect(ownerName).toBeVisible()
      const ownerImg = gameOwnersList.getByAltText(`Imagem ${gameOwner.name}`)
      await expect(ownerImg).toBeVisible()
    }

    const proposalButtons = gameOwnersList.getByRole("button", { name: "Fazer proposta" })
    await expect(proposalButtons).toHaveCount(ownersPerPage)
  })

  test("should display the next game owners when click on next page", async ({ page }: { page: Page }) => {
    // const { gameOwners } = await getGameOwners({ page: 2 })
    const nextPaginationButton = page.getByRole("link", { name: "Go to next page" })
    await nextPaginationButton.click()
    const gameOwnersPage2Link = "/game/ps5/elden-ring?owners-page=2"
    await page.waitForURL(gameOwnersPage2Link)
    await expect(page).toHaveURL(gameOwnersPage2Link)
  })
})
