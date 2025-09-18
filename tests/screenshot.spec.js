const {test,expect} = require("@playwright/test");

test("page screenshot ",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+"homepage.png"});

});
test("full page screenshot ",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"fullpage.png", fullPage: true});

});
test.only("element screenshot ",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    const element = await page.$(".product-layout");
    await page.locator('//*[@id="tbodyid"]/div[7]/div').screenshot({path:"tests/screenshots/"+Date.now()+"HTC One M9.png"});
await page.waitForTimeout(3000);
});