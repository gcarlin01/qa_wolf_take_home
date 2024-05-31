const { test, expect } = require("@playwright/test");
const { exec } = require("child_process");
const fs = require("fs");

test("Run index.js and verify CSV output", async ({}) => {
  await new Promise((resolve, reject) => {
    exec("node index.js", (error, stdout, stderr) => {
      if (error) {
        console.log(`Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.log(`Stderr: ${stderr}`);
        return reject(new Error(stderr));
      }
      console.log(`Stdout: ${stdout}`);
      resolve();
    });
  });

  const filePath = "./topTenArticles.csv";
  const fileExists = fs.existsSync(filePath);
  expect(fileExists).toBe(true);

  const csvContent = fs.readFileSync(filePath, "utf8");
  console.log(csvContent);

  expect(csvContent).toContain("Title");
  expect(csvContent).toContain("URL");
});
