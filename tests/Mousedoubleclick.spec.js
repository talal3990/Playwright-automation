const {test,expect} = require('@playwright/test');

test ('Mouse double click test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   const btncopy= await page.locator('//button[normalize-space()="Copy Text"]');

   //double click
   await btncopy.dblclick();

   const f2=await page.locator('#field2');

   await expect (f2).toHaveValue('Hello World!');

   await page.waitForTimeout(5000);

});
   