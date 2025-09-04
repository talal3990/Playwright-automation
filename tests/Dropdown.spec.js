const {test,expect}=require("@playwright/test");
test("Handle Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Multiple ways to select dropdown options
    // await page.locator("#country").selectOption({ label: "India" });//by using label
        // await page.locator("#country").selectOption('India');//by using visible text
            // await page.locator("#country").selectOption({ value: 'uk' });//by using value
            // await page.locator("#country").selectOption({ index: 1 });//by using index
// await page.selectOption('#country','India');//by text
// Assertions
//1) Check number of options in dropdown-Approach 1
// const options =await page.locator('#country option')
// await expect(options).toHaveCount(10);

//2) Check number of options in dropdown-Approach 2
// const options=await page.$$ ('#country option');
// console.log('Number of options in dropdown:', options.length);
// await expect(options.length).toBe(10);
// 3)check presence of value in dropdown -Approach 1
// const content=await page.locator('#country').textContent()
// await expect(content.includes('India')).toBeTruthy();
// 4)check presence of value in dropdown-Approach 2-Using looping
/*const options=await page.$$('#country option');
let status=false;

for (const option of options) {
    //    console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes('France')) {
        status = true;
        break;
    }
}
expect(status).toBeTruthy();*/
// 5)select option from dropdown using loop
const options=await page.$$('#country option');
let status=false;

for (const option of options) {
    //    console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes('France')) {
        await page.selectOption('#country', value='France');
        break;
    }
}


await page.waitForTimeout(5000);
});