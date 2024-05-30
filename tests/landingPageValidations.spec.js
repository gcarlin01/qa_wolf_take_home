const { test, expect } = require("@playwright/test");

test.describe("Landing Page Validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("validating the page title and URL", async ({ page }) => {
    await expect(page).toHaveURL("https://news.ycombinator.com/");
    await expect(page).toHaveTitle("Hacker News");
  });

  test("landing page should have 30 visible articles, including titles and corresponding links", async ({
    page,
  }) => {
    const articles = await page.locator(".athing");
    const articlesCount = await articles.count();
    expect(articlesCount).toBe(30);

    for (let i = 0; i < articlesCount; i++) {
      const articleElements = await articles
        .nth(i)
        .locator(".titleline a")
        .first();
      const articlesUrls = await articleElements.getAttribute("href");
      const articlesTitles = await articleElements.innerText();
      const articleElementVisibility = articleElements.isVisible();

      expect(articlesUrls).toBeTruthy();
      expect(articlesTitles).toBeTruthy();
      expect(articleElementVisibility).toBeTruthy();
    }
  });
});
