
const { test, expect } = require("@playwright/test");

test("HomePage Test", async ({ page }) => {
await page.goto('https://demoblaze.com/index.html');
//login
await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.locator("//button[normalize-space()='Log in']").click();
//homepage
const products=await page.$$('.hrefch');
await expect(page.locator('.hrefch')).toHaveCount(9);
//logout
await page.locator('#logout2').click();



});

test (" Add product to cart test", async ({ page }) => {
await page.goto('https://demoblaze.com/index.html');
//login
await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.locator("//button[normalize-space()='Log in']").click();
//add to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();
page.on('dialog', async dialog => {
expect(dialog.message()).toContain('Product added.');
await dialog.accept();
});



//logout
await page.locator('#logout2').click();

});