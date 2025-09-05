const {test,expect} = require('@playwright/test');

test ('Mouse double click test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   const btncopy= await page.locator('//button[normalize-space()="Copy Text"]');

   //double click
   await btncopy.dblclick();

});
   