const {test,expect}=require('@playwright/test');
test("Handle Bootstrap Dropdown", async ({ page }) => {
    await page.goto("https://ej2.syncfusion.com/demos/multi-select/checkbox/");
    // await page.click('.e-input-group-icon');
    await page.locator('.e-multiselect').click();
//1
//    const options=await page.locator('ul>li label input');
//    await expect(options).toHaveCount(19);

// 2
// const options=await page.locator('ul>li label input');
//  await expect(options).toBe(19);
// 3) select options from dropdown
/*const options=await page.$$('ul>li label');
for(let option of options)
{
    const value=await option.textContent();
    // console.log("value is ",value)
    if(value.includes('Angular')|| value.includes('Java'))
    {
        await option.click();
    }
}*/
// 4)deselect options 
const options=await page.$$('ul>li label');
for(let option of options)
{
    const value=await option.textContent();
    // console.log("value is ",value)
    if(value.includes('HTML')|| value.includes('CSS'))
    {
        await option.click();
    }
}




await page.waitForTimeout(5000);


});
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://ej2.syncfusion.com/demos/multi-select/checkbox/');
//   await page.locator('.control-wrapper').click();
//   await page.locator('.e-input-group-icon').click();
//   await page.getByRole('option', { name: 'Australia' }).click();
//   await page.getByRole('option', { name: 'Bermuda' }).click();
//   await page.getByRole('option', { name: 'Bermuda' }).dblclick();
//   await page.getByRole('option', { name: 'Canada' }).locator('span').nth(1).click();
//   await page.getByRole('option', { name: 'France' }).locator('span').nth(1).click();
//   await page.locator('.e-input-group-icon').first().click();
  
//   await page.waitForTimeout(5000); // Fixed: Use number instead of string
// });

// const { test, expect } = require('@playwright/test');

// test('Simple multi-checkbox dropdown count (no loops)', async ({ page }) => {
//   await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

//   // Open the multi-checkbox dropdown
//   await page.locator('#justAnInputBox').click();

//   // Get all checkboxes inside the dropdown
//   const checkboxes = page.locator('.comboTreeDropDownContainer input[type="checkbox"]:not([style*="display: none"])');
//   const totalCount = await checkboxes.count();

//   // Select first 3 checkboxes (no loop)
//   await checkboxes.nth(0).check();
//   await checkboxes.nth(1).check();
//   await checkboxes.nth(2).check();

//   // Check which are checked, using array/map syntax
//   const checkedStates = await Promise.all([
//     checkboxes.nth(0).isChecked(),
//     checkboxes.nth(1).isChecked(),
//     checkboxes.nth(2).isChecked()
//   ]);
//   const selectedCount = checkedStates.filter(Boolean).length;

//   console.log('Total checkboxes:', totalCount);
//   console.log('Selected checkboxes:', selectedCount);

//   expect(totalCount).toBeGreaterThanOrEqual(3);
//   expect(selectedCount).toBe(3);
// });
// const { test, expect } = require('@playwright/test');

// test('Count and select items in multi-checkbox dropdown', async ({ page }) => {
//   await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

//   // Open the multi-checkbox dropdown
//   await page.locator('#justAnInputBox').click();

//   // All checkboxes inside the dropdown
//   const checkboxes = page.locator('.comboTreeDropDownContainer input[type="checkbox"]:not([style*="display: none"])');
//   const totalCount = await checkboxes.count();
//   console.log('Total checkboxes:', totalCount);

//   // Select first 3 checkboxes
//   for (let i = 0; i < 3 && i < totalCount; i++) {
//     await checkboxes.nth(i).check();
//   }

//   // Count how many are actually checked
//   let selectedCount = 0;
//   for (let i = 0; i < totalCount; i++) {
//     if (await checkboxes.nth(i).isChecked()) selectedCount++;
//   }
//   console.log('Selected checkboxes:', selectedCount);

//   expect(totalCount).toBeGreaterThanOrEqual(3);
//   expect(selectedCount).toBe(3);
// });


