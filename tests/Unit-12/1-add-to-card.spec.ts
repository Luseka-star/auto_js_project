import { test, expect } from '@playwright/test';
import path from 'path';
import { products} from '../test-data/products';
import { ProductPage } from '../../pages/product.page';
import { Cart } from '../../pages/cart.page';
import { HomePage } from '../../pages/home.page';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({storageState: authFile});


test('Verify user can add product to cart', async ({ page }) => {
   
  const productPage = new ProductPage(page);
  const homePage = new HomePage(page);
  const cart = new Cart(page);
  
  const productName = products[1].name;
  const productPrice = products[1].price;
  const productIcon = homePage.getCardByTitle(productName);

  
  await page.goto('/');

  await productIcon.click();

  await expect(page).toHaveURL(/\/product\//);
  await expect(productPage.productName).toHaveText(productName);
  await expect(productPage.productPrice).toHaveText(productPrice);

  await productPage.addToCartBtn.click();
  await expect(productPage.productAdded).toBeVisible();
  await expect(productPage.productAddedText).toContainText('Product added to shopping cart');
  await expect(productPage.productAdded).toBeHidden({timeout: 8000});
  await expect(productPage.cartProductNumber).toHaveText('1');

  await productPage.cartProductNumber.click();
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/checkout'); 
  await expect(cart.productQuantity).toHaveValue('1');
  await expect(cart.productName).toHaveText(productName);
  await expect(cart.proceedCheckoutBtn).toBeVisible();

});

