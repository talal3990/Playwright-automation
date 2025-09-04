const {test,expect} = require('@playwright/test');

test("Handle Multiselect Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Select multiple options from the multiselect dropdown
//    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);
// Assertions
// 1)check number of options in drop down
// const options=await page.locator('#colors option')
    // await expect(options).toHaveCount(7);
// 2)check number of options in dropdown using Js array
    // const options=await page.$$('#colors option')
    //console.log("Number of options in dropdown:", options.length);
// await expect(options.length).toBe(7);
//3)check presence of value in dropdown
const content=await page.locator('#colors').textContent();  
// await expect(content.includes('Blue')).toBeTruthy();
await expect(content.includes('Black')).toBeFalsy();


    await page.waitForTimeout(5000);
});