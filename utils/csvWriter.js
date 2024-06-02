const { createObjectCsvWriter } = require("csv-writer");

async function csvWriter(articles) {
  const csvWriter = createObjectCsvWriter({
    path: process.env.CSV_PATH || "topTenArticles.csv",
    header: [
      { id: "title", title: "Title" },
      { id: "url", title: "URL" },
    ],
  });

  await csvWriter.writeRecords(articles);
}

module.exports = { csvWriter };
