const { chromium } = require("playwright");
const { createObjectCsvWriter } = require("csv-writer");

async function saveHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com");

  // wait for articles to load
  await page.waitForSelector(".athing");

  // get all articles
  const articles = await page.evaluate(() => {
    const articleElements = document.querySelectorAll(".athing");
    const articlesArray = [];

    // gett top 10 articles
    for (let i = 0; i < 10; i++) {
      const titleElement = articleElements[i].querySelector(".titleline a");

      // get title and url
      const title = titleElement.innerText;
      const url = titleElement.href;
      articlesArray.push({ title, url });
    }
    return articlesArray;
  });

  // write articles to CSV
  const csvWriter = createObjectCsvWriter({
    path: "topTenArticles.csv",
    header: [
      { id: "title", title: "Title" },
      { id: "url", title: "URL" },
    ],
  });

  await csvWriter.writeRecords(articles);

  // close browser
  await browser.close();
}

(async () => {
  await saveHackerNewsArticles();
})();
