// // const { test, expect } = require("@playwright/test");

// // test("Datepicker", async ({ page }) => {
// //   await page.goto("https://testautomationpractice.blogspot.com/");

// //   // Target date
// //   const year = "2024";
// //   const month = "March";
// //   const day = "20";

// //   // Open calendar
// //   await page.click("#datepicker");

// //   // Navigate to correct month and year
// //   while (true) {
// //     const currentYear = await page.locator(".ui-datepicker-year").textContent();
// //     const currentMonth = await page.locator(".ui-datepicker-month").textContent();

// //     if (currentYear.trim() === year && currentMonth.trim() === month) {
// //       break;
// //     }

// //     await page.locator('//a[@title="Next"]').click(); // Next button
// //   }

// //   // Select the date
// //   const dates = await page.$$("//a[@class='ui-state-default']");
// //   for (const dt of dates) {
// //     if ((await dt.textContent()).trim() === day) {
// //       await dt.click();
// //       break;
// //     }
// //   }

// //   await page.waitForTimeout(5000);
// // });
// const { test, expect } = require("@playwright/test");

// test("Datepicker", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const year = 2024;
//   const month = "March";
//   const day = "20";

//   await page.click("#datepicker");

//   while (true) {
//     const currentYear = parseInt(await page.locator(".ui-datepicker-year").textContent());
//     const currentMonth = (await page.locator(".ui-datepicker-month").textContent()).trim();

//     if (currentYear === year && currentMonth === month) {
//       break;
//     }

//     if (currentYear > year || (currentYear === year && currentMonthOrder(currentMonth) > currentMonthOrder(month))) {
//       await page.locator(".ui-datepicker-prev").click(); // go backwards
//     } else {
//       await page.locator(".ui-datepicker-next").click(); // go forwards
//     }
//   }

//   await page.locator(`.ui-datepicker-calendar td >> text=${day}`).click();
//   await page.waitForTimeout(2000);
// });

// function currentMonthOrder(month) {
//   const months = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December"
//   ];
//   return months.indexOf(month);
// }
const { test, expect } = require("@playwright/test");

test("Datepicker - select March 20, 2022", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const year = "2022";
  const month = "March";
  const day = "20";

  // Open datepicker
  await page.click("#datepicker");

  // Navigate to the correct year and month (2022, March)
  await page.waitForSelector(".ui-datepicker-title");
  while (
    (await page.locator(".ui-datepicker-year").textContent()).trim() !== year ||
    (await page.locator(".ui-datepicker-month").textContent()).trim() !== month
  ) {
    await page.locator(".ui-datepicker-prev").click();
  }

  // Select the date directly using XPath with text
  await page.locator(`//table[@class='ui-datepicker-calendar']//a[text()='${day}']`).click();

  await page.waitForTimeout(2000);
});

