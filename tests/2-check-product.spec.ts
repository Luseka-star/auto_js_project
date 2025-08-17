import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { products } from './test-data/products';



test('Verify product details and buttons on product page', async({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await page.goto('');
    await homePage.openProduct(products[0].name);
    await expect(page).toHaveURL(/\/product\//);

    await expect(productPage.productName).toHaveText(products[0].name);
    await expect(productPage.productPrice).toHaveText(products[0].price);
    await expect(productPage.addToCartBtn).toBeVisible();
    await expect(productPage.addToFavouritesBtn).toBeVisible();

})