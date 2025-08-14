import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';


test('Verify product details and buttons on product page', async({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await page.goto('');
    await homePage.getCardByTitle('Combination Pliers').click();
    await expect(page).toHaveURL(/\/product\//);
    await expect(productPage.productName).toHaveText('Combination Pliers');
    await expect(productPage.productPrice).toHaveText('14.15');
    await expect(productPage.addToCartBtn).toBeVisible();
    await expect(productPage.addToFavouritesBtn).toBeVisible();

})