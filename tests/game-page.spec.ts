import { test, expect, type Page } from "@playwright/test"
import { ownersPerPage } from "@/lib/constants"

test.describe("GamePage", () => {
  test.beforeEach(async ({ page }) => {
    const gameLink = "/game/ps5/elden-ring"
    await page.goto(gameLink)
    await page.waitForURL(gameLink)
    await expect(page).toHaveURL(gameLink)
  })

  test("should display the game owners list", async ({ page }: { page: Page }) => {
    const gameOwnersList = page.getByTestId("game-owners-list")
    await gameOwnersList.isVisible()
  })

  test("should display the right quantity of proposal buttons", async ({ page }: { page: Page }) => {
    const proposalButtons = page
      .getByTestId("game-owners-list").getByRole("button", { name: "Fazer proposta" })
    await expect(proposalButtons).toHaveCount(ownersPerPage)
  })
})
