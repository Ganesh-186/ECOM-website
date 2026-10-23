import {chromium, test} from '@playwright/test';


test('launch flipkart',async({page})=>{
  await page.goto('https://www.flipkart.com/');
  const title = await page.title();
  console.log(title);
  console.log(await page.url());

  await page.screenshot({path:'D:\\Class\\Playwright\\flipkart.png'})

  await page.goto('https://www.instagram.com');
  console.log(await page.url());
  console.log(await page.title());
  await page.goBack();
  await page.goto('https://www.fa')

  await page.getByRole('link',{name:""})
  
})

test('Launch facebook',async({page})=>{
  await page.goto('https://www.fa')
})