require("dotenv").config();
const { launchBrowser } = require("./utils/launchBrowser");
const {
  hackerNewsArticleScraper,
} = require("./utils/hackerNewsArticleScraper");
const { csvWriter } = require("./utils/csvWriter");

async function saveHackerNewsArticle() {
  try {
    const browser = await launchBrowser();
    const articles = await hackerNewsArticleScraper(browser);
    await csvWriter(articles);
    await browser.close();
    console.log("CSV file saved successfully.");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

(async () => {
  await saveHackerNewsArticle();
})();
