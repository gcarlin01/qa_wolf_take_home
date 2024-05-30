require("dotenv").config();
const { launchBrowser } = require("./pageObjects/launchBrowser");
const {
  hackerNewsArticleScraper,
} = require("./pageObjects/hackerNewsArticleScraper");
const { csvWriter } = require("./pageObjects/csvWriter");

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
