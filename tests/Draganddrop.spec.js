const {test,expect}=require('@playwright/test');    
test('Drag and drop test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    await page.locator('#column-a').dragTo(await page.locator('#column-b'));

    // const rome=await page.locator('#box6');
    // const italy=await page.locator('#box106');
    // Approach 1
    // await rome.hover();
    // await page.mouse.down();
    // await italy.hover();
    // await page.mouse.up();
    // await page.waitForTimeout(5000);

    //Approach 2
    // await rome.dragTo(italy);

// Washington to usa 
// const washington=await page.locator('#box3');
// const usa=await page.locator('#box103');
// await washington.dragTo(usa);


    await page.waitForTimeout(5000);

})