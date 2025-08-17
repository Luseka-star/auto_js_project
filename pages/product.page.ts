import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from './fragments/header.fragment';


export class ProductPage{
    page: Page;
    header: HeaderFragment;
    productImg: Locator;
    productName: Locator;
    productPrice: Locator;
    productDescr: Locator;
    addToCartBtn: Locator;
    addToFavouritesBtn: Locator;
    decreaseQntty: Locator;
    productQntty: Locator;
    increaseQntty: Locator;


    constructor(page: Page){
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productImg = this.page.locator('.figure-img.img-fluid');
        this.productName = this.page.getByTestId('product-name');
        this.productPrice = this.page.getByTestId('unit-price');
        this.productDescr = this.page.getByTestId('product-description');
        this.addToCartBtn = this.page.getByTestId('add-to-cart');
        this.addToFavouritesBtn = this.page.getByTestId('add-to-favorites');
        this.decreaseQntty = this.page.getByTestId('decrease-quantity');
        this.productQntty = this.page.getByTestId('quantity');
        this.increaseQntty = this.page.getByTestId('increase-quantity');
    }


    returnHashtagLocator(text: string): Locator{
       return this.page.locator('.badge.rounded-pill').filter({ hasText: text });
    }
}