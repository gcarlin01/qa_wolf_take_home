async function hackerNewsArticleScraper(browser) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    process.env.HACKER_NEWS_URL || "https://news.ycombinator.com"
  );
  await page.waitForSelector(".athing");

  const articles = await page.evaluate(() => {
    const articleElements = document.querySelectorAll(".athing");
    const articlesArray = [];
    for (let i = 0; i < 10; i++) {
      const titleElement = articleElements[i].querySelector(".titleline a");
      const title = titleElement.innerText;
      const url = titleElement.href;
      articlesArray.push({ title, url });
    }
    return articlesArray;
  });

  return articles;
}

module.exports = { hackerNewsArticleScraper };
