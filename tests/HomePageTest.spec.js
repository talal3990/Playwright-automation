
const {test, expect} = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  const PageTitle = await page.title();
  await expect(page).toHaveTitle("STORE");

  console.log('Page Title is:',  PageTitle);

  const pageURL = await page.url();
  console.log('Page URL is:', pageURL);
  await expect(page).toHaveURL("https://demoblaze.com/index.html");
  await page.waitForTimeout(5000);
  await page.close();
});

