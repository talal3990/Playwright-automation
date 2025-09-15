const { test, expect } = require('@playwright/test');

test("Single file Upload (dummy text file)", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  // Wait for file input to be ready
  await page.waitForSelector('input[type="file"]');

  // Upload the dummy text file
  await page.locator('#file-upload').setInputFiles('tests/upload files/sample.txt');

  // Click the Upload button
  await page.locator('#file-submit').click();

  // Assertion: check uploaded file name appears
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');

  // Wait to observe
  await page.waitForTimeout(3000);
});



test("Multiple file Upload", async ({ page }) => {

})