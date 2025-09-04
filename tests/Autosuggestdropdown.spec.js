
const { test, expect } = require("@playwright/test");

test("autosuggestdropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");
  await page.locator('#src').fill('Delhi');
  
  // Wait for at least one suggestion to appear
  await page.waitForSelector('li.sc-iwsKbI div div:first-child');
  
  // Get all the city name options
  let fromCityOptions = await page.$$('li.sc-iwsKbI div div:first-child');
  for (let option of fromCityOptions) {
    const value = await option.textContent();
    // console.log(value);
    if(value.includes('Anand Vihar'))
    {
        await option.click();
        break;
    }
  }
  
  await page.waitForTimeout(3000);
});
