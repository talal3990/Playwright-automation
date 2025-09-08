const {test,expect}=require('@playwright/test');    
test('Drag and drop test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    await page.locator('#column-a').dragTo(await page.locator('#column-b'));
})