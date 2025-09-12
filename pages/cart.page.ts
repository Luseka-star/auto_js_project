import { Locator, Page } from "@playwright/test";

export class Cart {
    page: Page;
    cartItem: Locator;
    productQuantity: Locator;
    productName: Locator;
    proceedCheckoutBtn: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.cartItem = this.page.locator('.ng-star-inserted');
        this.productQuantity = this.page.getByTestId('product-quantity');
        this.productName = this.page.getByTestId('product-title');
        this.proceedCheckoutBtn = this.page.getByTestId('proceed-1');
    }

   getCartItem(itemName: string): Locator {
     return this.page.locator('.ng-star-inserted', {
     has: this.page.locator('.product-title', { hasText: itemName })
  });
}
}