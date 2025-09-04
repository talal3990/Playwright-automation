const { test, expect } = require('@playwright/test');

test('Handle Input Box', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Input Box
    await expect(page.locator('//input[@id="name"]')).toBeVisible();
    
    // Check if input is empty - CORRECT syntax
    await expect(page.locator('//input[@id="name"]')).toHaveValue('');
    
    // These are correct
    await expect(page.locator('//input[@id="name"]')).toBeEditable();
    await expect(page.locator('//input[@id="name"]')).toBeEnabled();

    // Fill the input
   // await page.locator('//input[@id="name"]').fill("John Doe");
    await page.fill('//input[@id="name"]', 'John Doe');
    await page.waitForTimeout(5000);
});