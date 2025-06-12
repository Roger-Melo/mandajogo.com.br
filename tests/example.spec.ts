import { test, expect, type Page } from "@playwright/test"

test.describe("HomePage", () => {
  test("should navigate to the Elden Ring page", async ({ page }: { page: Page }) => {
    const gameTitle = "Elden Ring"
    const gameLink = "/game/ps5/elden-ring"
    await page.goto("/")
    await page.click(`text=${gameTitle}`)
    await page.waitForURL(gameLink)
    await expect(page).toHaveURL(gameLink)
    await expect(page.getByRole("heading", { name: gameTitle })).toBeVisible()
  })
})
