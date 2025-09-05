const {test,expect} = require('@playwright/test');
test('Mouse hover',async ({page})=>{
  await page.goto('https://demo.opencart.com/index.php?route=product/product&path=57&product_id=49');
const desktops=  await page.locator('//a[normalize-space()="Desktops"]');
const macbook= await page.locator('//a[normalize-space()="Mac (1)"]');

//mouse hover action
await desktops.hover();
await macbook.hover();
await page.waitForTimeout(5000);

});

