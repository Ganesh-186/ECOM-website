import { test } from '@playwright/test';
import { parseArgs } from 'node:util';

test('Search in amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('Iphone 17');
  await page.locator('#nav-search-submit-button').click();
  await page.waitForLoadState('domcontentloaded');
})


test('Handling login popup in flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  try {
    await page.waitForSelector('//input[@type="number"]', { timeout: 5000 });
    await page.locator('//input[@type="number"]').fill('9876543256');
    await page.getByRole('button', { name: "Continue" }).click();

  }
  catch {
    console.log('popup not came');
  }
})


test('File uploading', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  // await page.locator('#uploadFile').setInputFiles('./screen shot/flipkart.png')
  await page.locator('#uploadFile').setInputFiles("D:\\Class\\Playwright\\flipkart.png")
})


test('Upload multiple files', async ({ page }) => {
  await page.goto('https://uploadnow.io/en/upload');
  await page.setInputFiles('//input[@type="file"]', ['./flipkart.png',
    "D:\\Class\\Playwright\\flipkart.png", "D:/8AM/Image.png"]);


  await page.getByRole('button', { name: "Validate and upload" }).click();

  await page.waitForEvent('download')
})


test('Handling Download', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const [downloadedFile] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: "Download" }).click()
  ]);

  // await downloadedFile.saveAs('./Download/' + await downloadedFile.suggestedFilename());
  //                          ./Download/Filename.format

  await downloadedFile.saveAs('./Download/image.png')
})





test('DropDown', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByTitle('Search in').selectOption({ value: "search-alias=appliances" });

  await page.getByTitle('Search in').selectOption("search-alias=beauty");

  await page.getByTitle('Search in').selectOption({ label: "Alexa Skills" });

  await page.getByTitle('Search in').selectOption("Amazon Fresh Meat");

  await page.getByTitle('Search in').selectOption({ index: 1 });

  await page.selectOption('#searchDropdownBox', "Computers & Accessories");

  //Multi Select
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
  await page.getByRole('button', { name: "Multi-Select" }).click();
  await page.selectOption(".form-multiselect", ["Option 1", "Option 3", "Option 5"]);
})


test('Window Handling', async ({ context }) => {
  const page = await context.newPage();

  await page.goto('https://www.myntra.com/');
  await page.locator('//a[@data-group="kids"]').hover();
  await page.locator('//a[@href="/boy-tshirts"]').click();

  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('//h4[text()="Boys Printed T-shirt"]/preceding-sibling::h3[text()="Printabulous"]/parent::div[@class="product-productMetaInfo"]').click()
  ]);

  await newTab.waitForLoadState();
  await newTab.getByRole('button', { name: "2-3Y" }).click();
  await page.bringToFront();


  const [newTab2] = await Promise.all([
    context.waitForEvent("page"),
    page.locator(`//h4[text()="Kids Pure Cotton T-shirt"]/preceding-sibling::h3[text()="Googo Gaaga"]
        /following-sibling::h4[@class="product-sizes"]/child::span[text()="2-3Y"]
        /ancestor::div[@class="product-productMetaInfo"]`).click()
  ]);

  await newTab2.waitForLoadState();


})