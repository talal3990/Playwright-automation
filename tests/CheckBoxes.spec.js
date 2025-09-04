const {test,expect} = require("@playwright/test");

test('Handle Check Boxes', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   //single checkbox
   await page.locator('(//input[@id="monday" and @type="checkbox"])').check();
   await expect(page.locator('(//input[@id="monday" and @type="checkbox"])')).toBeChecked();
   // await page.check('(//input[@id="monday" and @type="checkbox"])');
//   expect(await page.locator('(//input[@id="monday" and @type="checkbox"])').toBeChecked());

      await expect(page.locator('(//input[@id="monday" and @type="checkbox"])').isChecked()).toBeTruthy();
      //await expect(page.locator('(//input[@id="sunday" and @type="checkbox"])').isChecked()).toBeFalsy();
expect(await page.locator('(//input[@id="sunday" and @type="checkbox"])').isChecked()).toBeFalsy();


//Multiple checkboxes
const checkboxlocators =[
    '(//input[@id="monday" and @type="checkbox"])',
    '(//input[@id="wednesday" and @type="checkbox"])',
    '(//input[@id="thursday" and @type="checkbox"])',
    '(//input[@id="sunday" and @type="checkbox"])'

];

for(const checkbox of checkboxlocators)//select multiple checkboxes
{
    await page.locator(checkbox).check();

}
await page.waitForTimeout(5000);
for(const checkbox of checkboxlocators)//unselect multiple checkboxes which are already selected
{
    if(await page.locator(checkbox).isChecked());
    await page.locator(checkbox).uncheck();

}



    // Pause time
    await page.waitForTimeout(5000);
});