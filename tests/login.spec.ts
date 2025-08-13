import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';




test('Verify success login of existed user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);
  
  await page.goto('/auth/login');

  await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');
  await expect(page).toHaveURL('/account');
  await expect(accountPage.heading).toContainText('My account');
  await expect(accountPage.header.accountName).toBeVisible();

});

test('Verify product details and buttons on product page', async({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    
    await page.goto('/');
    await homePage.getCardByTitle('Combination Pliers').click();
    await expect(page).toHaveURL(/\/product\//);
    await expect(productPage.productName).toHaveText('Combination Pliers');
    await expect(productPage.productPrice).toHaveText('14.15');
    await expect(productPage.addToCartBtn).toBeVisible();
    await expect(productPage.addToFavouritesBtn).toBeVisible();

})