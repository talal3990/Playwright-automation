// const { test, expect } = require('@playwright/test');

// test('Keyboard actions', async ({ page }) => {
//   await page.goto('https://www.diffchecker.com');

//   // Type in Original text area (contenteditable div)
//   const original = page.locator('//div[@aria-label="Original text input"]');
//   await original.click();
//   await page.keyboard.type('welcome to automation');

//   // ctrl+a (select all)
//   await page.keyboard.press('Control+A');

//   // ctrl+c (copy)
//   await page.keyboard.press('Control+C');

//   // tab (move to Changed text input)
//   await page.keyboard.press('Tab');

//   // ctrl+v (paste into Changed text input)
//   await page.keyboard.press('Control+V');

//   // wait for observation
//   await page.waitForTimeout(5000);
// });

const { test, expect } = require('@playwright/test');

test('Keyboard actions fixed', async ({ page }) => {
  await page.goto('https://www.diffchecker.com');

  // Type in Original text area (contenteditable div)
  const original = page.locator('//div[@aria-label="Original text input"]');
  await original.click();
  await page.keyboard.type('welcome to automation');

  // Get text from original
  const originalText = await original.innerText();

  // Focus Changed text area
  const changed = page.locator('//div[@aria-label="Changed text input"]');
  await changed.click();

  // Type the same text into changed box
  await page.keyboard.type(originalText);

  // ✅ Verify both are same
  const changedText = await changed.innerText();
  await expect(changedText).toBe(originalText);

  // wait for observation
  await page.waitForTimeout(5000);
});
