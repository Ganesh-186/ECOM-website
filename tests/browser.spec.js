import {test, chromium} from '@playwright/test';

test('Launch browser', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo:{dir:'./videos'}
    });
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://www.flipkart.com');
    await page2.goto('https://www.instagram.com');

    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
}) 