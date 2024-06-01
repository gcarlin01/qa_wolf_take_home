# 🐺 QA Wolf Take Home Assignment

Welcome to my submission for the QA Wolf take home assignment for the [QA Engineer](https://www.notion.so/qawolf/QA-Wolf-QA-Engineer-Remote-156203a1e476459ea5e6ffca972d0efe) role! I appreciate your interest in reviewing my work.

## Project Overview

This project includes a script to scrape the top 10 articles from [Hacker News](https://news.ycombinator.com/) and save their titles and URLs to a CSV file using JavaScript and Microsoft's [Playwright](https://playwright.dev/) framework. Additionally, I have included a few automated tests using Playwright.

## Instructions

### Cloning the Repository

To get started, clone the repository:

```bash
git clone https://github.com/gcarlin01/qa_wolf_take_home.git
cd qa_wolf_take_home
```

### Installing Dependencies

```bash
npm install
```

### Installing Playwright Browsers

```bash
npx playwright install
```

### Running the Script

```bash
node index.js
```

### Running the Tests

```bash
npm test
```

## Project Structure

- [`index.js`](index.js): Main script to scrape Hacker News and save articles to a CSV file.
- [`pageObjects/launchBrowser.js`](pageObjects/launchBrowser.js): Module to launch the browser.
- [`pageObjects/hackerNewsArticleScraper.js`](pageObjects/hackerNewsArticleScraper.js): Module to scrape articles from Hacker News.
- [`pageObjects/csvWriter.js`](pageObjects/csvWriter.js): Module to write articles to a CSV file.
- [`tests/landingPageValidations.spec.js`](tests/landingPageValidations.spec.js): Playwright test for landing page validations.
- [`tests/runScript.spec.js`](tests/runScript.spec.js): Playwright test to run the script and verify CSV output.
- [`playwright.config.js`](playwright.config.js): Playwright configuration file.
- [`topTenArticles.csv`](topTenArticles.csv): Generated CSV file with the top 10 Hacker News articles.
- [`why_qa_wolf.txt`](why_qa_wolf.txt): Text file containing the link to my video response to "Why do you want to work at QA Wolf?"

## Future Improvements

Here are a few enhancements that could be made to further improve this project:

- **Error Handling**: Improve error handling and logging within the scraper and CSV writer modules.
- **Browser Options**: Allow dynamic selection of browser type (Chromium, Firefox, WebKit) through environment variables or command-line arguments.
- **Advanced Scraping**: Implement more robust scraping techniques to handle dynamic content and potential changes in the Hacker News website structure.
- **Unit Tests**: Add unit tests for individual modules to ensure better test coverage and robustness.
- **CI/CD Integration**: Set up continuous integration and continuous deployment (CI/CD) pipelines to automate testing and deployment processes.
