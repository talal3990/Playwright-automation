import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ej2.syncfusion.com/demos/multi-select/checkbox/');
  await page.locator('.control-wrapper').click();
  await page.locator('.e-input-group-icon').click();
  await page.getByRole('option', { name: 'Australia' }).click();
  await page.getByRole('option', { name: 'Bermuda' }).click();
  await page.getByRole('option', { name: 'Bermuda' }).dblclick();
  await page.getByRole('option', { name: 'Canada' }).locator('span').nth(1).click();
  await page.getByRole('option', { name: 'France' }).locator('span').nth(1).click();
  await page.locator('.e-input-group-icon').first().click();
});