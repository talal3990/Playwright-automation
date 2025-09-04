import { test, expect } from '@playwright/test';

test('Login and navigate flow', async ({ page }) => {
  // Go to site
  await page.goto('https://demoblaze.com/index.html');

  // Login flow
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Wait for login to complete
  await page.waitForTimeout(5000);

  // Click on Home button
  await page.getByRole('link', { name: 'Home ' }).click();
  await page.waitForTimeout(2000);

  // Go to Laptops category
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.waitForTimeout(2000);

  // Click on Contact link (Contact Us button in navbar)
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.waitForTimeout(2000);
});
