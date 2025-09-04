const {test, expect}=require("@playwright/test");
test ("loginflow", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.getByRole('link',{name: 'Login'}).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button',{name: 'Login'}).click();
    await page.waitForTimeout(5000);

});