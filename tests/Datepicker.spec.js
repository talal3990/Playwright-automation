const{test,expect}=require("@playwright/test");
test("Datepicker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.fill('#datepicker','03/15/2024');
// datepicker
const year=2024;
const month=March;
const day=20;

await page.click('#datepicker');//opens calendar

while(true){
currentYear=await page.locator('.ui-datepicker-year').textContent()
currentMonth=await page.locator('.ui-datepicker-month').textContent()
if(currentYear==year && currentMonth==month){
    break;
}
await page.locator('{title="Next"}').click();//clicks next button

}

 
    await page.waitForTimeout(3000);
    
});