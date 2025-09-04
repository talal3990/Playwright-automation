//const { expect } = require("@playwright/test");
import{test,expect} from '@playwright/test';
test ('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');
    //click on login button -property 
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username -css
    //await page.locator('#loginusername').fill('pavanol');
      await page.fill('#loginusername', 'pavanol');
       //page.type('#loginusername')

       //provide password -css
await page.fill('#loginpassword', 'test@123');
       //click on login button -xpath
       await page.click("//button[normalize-space()='Log in']")
       //verify logout  link presence -xpath
     const logoutlink = await page.locator("//a[@id='logout2']")

     await expect(logoutlink).toBeVisible();
     await page.close


       




})