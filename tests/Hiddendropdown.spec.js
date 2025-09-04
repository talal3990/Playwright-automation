// // const{test,expect}=require('@playwright/test');
// // test("hidden dropdown",async({page})=>{
// //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
// //     await page.locator("input[name='username']").fill("Admin");
// //     await page.locator("input[name='password']").fill("admin123");
// //     await page.locator("[type='submit']").click();
// //     await page.locator("(//a[@class='oxd-main-menu-item active'])[1]").click();

// //     // click on dropdown
// //     await page.locator("//div[@class='oxd-table-filter']//div[3]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
// //     //waiting for options
// //     await page.waitForTimeout(5000);
// //    const options = await page.$$('//div[@role="option"]//ancestor::form');
// //    for(let option of options){
// //    const EmploymentStatus = await option.textContent();
// //    //console.log(EmploymentStatus);
// //    if(EmploymentStatus.includes("Part-Time Internship")){
// //     await option.click();
// //     break;

// //        }
// //    }
// //    await page.waitForTimeout(5000);
// // });
// const { test, expect } = require('@playwright/test');

// test("Select Employment Status - Part-Time Internship", async ({ page }) => {
//   // Login
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//   await page.locator("input[name='username']").fill("Admin");
//   await page.locator("input[name='password']").fill("admin123");
//   await page.locator("[type='submit']").click();

//   // Navigate to PIM
//   await page.locator("//span[text()='PIM']").click();

//   // Open Employment Status dropdown
//   await page.locator("//label[text()='Employment Status']/parent::div/following-sibling::div//i").click();

//   // Wait for options to load
//   await page.waitForSelector("//div[@role='option']");

//   // Click on Part-Time Internship directly
//   await page.locator("//div[@role='option']//span[text()='Part-Time Internship']").click();

//   // Assert dropdown now shows the selected value
//   await expect(
//     page.locator("//label[text()='Employment Status']/parent::div/following-sibling::div//div[contains(@class,'oxd-select-text-input')]")
//   ).toHaveText("Part-Time Internship", { timeout: 10000 });  // extend wait
// });
const { test, expect } = require('@playwright/test');

test("List all Job Titles and select QA Engineer", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Login
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();

  // Go to PIM
  await page.locator("//span[text()='PIM']").click();

  // Open Job Title dropdown
  await page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//i").click();

  // Wait until more than 1 option is loaded (to avoid "No Records Found")
  await page.waitForFunction(() => {
    return document.querySelectorAll("div[role='option']").length > 1;
  });

  // Grab all job titles
  const jobOptions = await page.$$("xpath=//div[@role='option']");
  console.log("🔽 Available Job Titles:");
  for (let option of jobOptions) {
    const text = (await option.innerText()).trim();
    if (text) console.log(" - " + text);
  }

  // Select QA Engineer
  await page.locator("//div[@role='option' and normalize-space()='QA Engineer']").click();

  // Assert QA Engineer is selected
  await expect(
    page.locator("//label[text()='Job Title']/parent::div/following-sibling::div//div[contains(@class,'oxd-select-text-input')]")
  ).toHaveText("QA Engineer", { timeout: 10000 });

  console.log("✅ QA Engineer successfully selected!");
});




