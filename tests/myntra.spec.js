import { test } from '@playwright/test';

test('myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/men-tshirts');

    const priceTexts = await page.locator(
        '//li[@class="product-base"]//span[@class="product-discountedPrice"]'
    ).allInnerTexts();

    const prices = priceTexts.map(price =>
        Number(price.replace(/[^0-9]/g, ''))
    );

    const minPrice = Math.min(...prices);

    const productCard = page.locator(
        `//li[@class="product-base"]//span[@class="product-discountedPrice" and contains(., "${minPrice}")]`
    ).first();

    const brand = await productCard
        .locator('//h3[@class="product-brand"]')
        .innerText();

    const productName = await productCard
        .locator('//h4[@class="product-product"]')
        .innerText();

    console.log('Minimum price:', minPrice);
    console.log('Brand:', brand);
    console.log('Product name:', productName);
});