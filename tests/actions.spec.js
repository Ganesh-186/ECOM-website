import {test} from '@playwright/test';

test('Keyboard actions',async({page})=>{
    await page.goto('https://www.amazon.in');
    await page.getByPlaceholder('Search Amazon').fill('Iphone')
    // await page.getByPlaceholder('Search Amazon').fill('17pro')
    // await page.getByPlaceholder('Search Amazon').pressSequentially('Iphone',{delay:1000})
    // await page.getByPlaceholder('Search Amazon').pressSequentially('17pro',{delay:1000});

    await page.getByPlaceholder('Search Amazon').press('Control+A');
    await page.getByPlaceholder('Search Amazon').press('Control+X');
    await page.getByPlaceholder('Search Amazon').press('Control+V');
    await page.keyboard.press('Enter');
})

test('Mouse actions',async({page})=>{
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,800);

    const element = page.getByRole('link',{name:"Myntra"});
    await element.scrollIntoViewIfNeeded();

    await page.waitForTimeout(5000)

    await page.goto('https://jqueryui.com/droppable/');
    await page.locator('#draggable').dragTo(await page.locator('#droppable'));


    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.locator('#droppable').hover();
    await page.mouse.up();




})


