const { test, expect } = require('@playwright/test');

test('Handle Radio Button', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

   //Radio Button
  await page.locator('//input[@id="male"]').check();//male radio button
  //await page.check("//input[@id='male']")

//await expect (await page.locator('//input[@id="male"]')).toBeChecked();
await expect(page.locator('//input[@id="male"]')).toBeChecked();
await expect(await page.locator('//input[@id="male"]').isChecked()).toBeTruthy();
//await expect (await page.locator('//input[@id="male"]')).isChecked().toBeTruthy();//male




  await expect (await page.locator('//input[@id="female"]').isChecked()).toBeFalsy();//female

  //pause time
    await page.waitForTimeout(5000);
});