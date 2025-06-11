import { test, expect, type Page } from "@playwright/test"

test.describe("HomePage", () => {
  test("should navigate to the Elden Ring page", async ({ page }: { page: Page }) => {
    const gameTitle = "Elden Ring"
    await page.goto("/")
    await page.click(`text=${gameTitle}`)
    await expect(page).toHaveURL("/game/ps5/elden-ring")
    await expect(page.getByRole("heading", { name: gameTitle })).toBeVisible()
  })
})
