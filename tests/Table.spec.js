const { test, expect } = require('@playwright/test');

test('Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator('#productTable');

  // 1) total no of rows and columns
  const columns = table.locator('thead tr th');
  console.log('Number of columns:', await columns.count());
  await expect(columns).toHaveCount(4);

  const rows = table.locator('tbody tr');
  console.log('Number of rows:', await rows.count());
  await expect(rows).toHaveCount(5);

  // 2) select checkbox for product 4
 /* const matchedRow = rows.filter({ has: page.locator('td:has-text("Smartwatch")') });
  await matchedRow.locator('input[type="checkbox"]').check();*/
// 3)select multiple products by re-usable function
// await selectProduct(rows,page,'Smartwatch');
// await selectProduct(rows,page,'Smartphone');
// await selectProduct(rows,page,'Laptop');

// 4)print all product details using looping statement 
// for(let i=0;i<await rows.count();i++)
// {
//    const row= rows.nth(i);
//    const tds=row.locator('td')
//   for(let j=0;j<await tds.count()-1;j++)
//   {
//     console.log(await tds.nth(j).textContent());

//   }
// }
// 5) read data from all the pages in table
const pages=await page.locator('.pagination li a')
console.log('Number of pages in the table:', await pages.count());
for(let p=0;p<await pages.count();p++)
{
if(p>0)
{
  await pages.nth(p).click();
}
for(let i=0;i<await rows.count();i++)
{
   const row= rows.nth(i);
   const tds=row.locator('td')
  for(let j=0;j<await tds.count()-1;j++)
  {
    console.log(await tds.nth(j).textContent());

  }
  
  }
  await page.waitForTimeout(3000);
}

  await page.waitForTimeout(3000);
});
async function selectProduct(rows,page,name)
{
    const matchedRow = rows.filter({ has: page.locator(`td:has-text("${name}")`) });
  await matchedRow.locator('input[type="checkbox"]').check();

}


// const { test, expect } = require('@playwright/test');

// test('Select Product 4 (Smartwatch) from pagination table', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

//   const table = page.locator('#productTable tbody tr');

//   // helper function to select product by name on current page
//   async function selectProduct(productName) {
//     const matchedRow = table.filter({ hasText: productName });
//     if (await matchedRow.count() > 0) {
//       const checkbox = matchedRow.locator('input[type="checkbox"]');
//       await checkbox.scrollIntoViewIfNeeded();
//       await checkbox.check();
//       return true;
//     }
//     return false;
//   }

//   // Try selecting Smartwatch (Product 4)
//   let found = await selectProduct('Smartwatch');

//   // If not found on first page, go to next page(s) until found
//   while (!found) {
//     const nextBtn = page.locator('a', { hasText: 'Next' });
//     if (!(await nextBtn.isVisible())) break; // no more pages
//     await nextBtn.click();
//     await page.waitForTimeout(1000); // wait for rows to update
//     found = await selectProduct('Smartwatch');
//   }

//   // Assert that checkbox is checked
//   const row = table.filter({ hasText: 'Smartwatch' });
//   const checkbox = row.locator('input[type="checkbox"]');
//   await expect(checkbox).toBeChecked();

//   console.log('✅ Product 4 Smartwatch checkbox selected successfully');
// });
