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
        this.productName = this.page.locator('[data-test="product-name"]');
        this.productPrice = this.page.locator('[data-test="unit-price"]');
        this.productDescr = this.page.locator('[data-test="product-description"]');
        this.addToCartBtn = this.page.locator('[data-test="add-to-cart"]');
        this.addToFavouritesBtn = this.page.locator('[data-test="add-to-favorites"]');
        this.decreaseQntty = this.page.locator('[data-test="decrease-quantity"]');
        this.productQntty = this.page.locator('[data-test="quantity"]');
        this.increaseQntty = this.page.locator('[data-test="increase-quantity"]');
    }


    returnHashtagLocator(text: string): Locator{
        return this.page.locator(`.badge.rounded-pill:has-text("${text}")`);
    }
}