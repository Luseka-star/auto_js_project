import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from './fragments/header.fragment';

export class HomePage {
    page: Page;
    header: HeaderFragment;
    banner: Locator;
    sortSelect: Locator;
    sliderPriceHigh: Locator;
    sliderPriceLow: Locator;
    price: Locator;
    cards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.banner = this.page.locator('.img-fluid');
        this.sortSelect = this.page.getByTestId('sort');
        this.sliderPriceHigh = this.page.locator('.ngx-slider-model-high');
        this.sliderPriceLow = this.page.locator('.ngx-slider-model-value');
        this.price = this.page.getByTestId('product-price');
        this.cards = this.page.locator('.card');
    }

    getCardByTitle(title: string): Locator {
        return this.cards.filter({ has: this.page.getByText(title) });

    }

    getListProductNamesLocator(): Locator {
        return this.page.locator('.product-title');
    }

    async getListProductNames(): Promise<string[]> {
        return await this.getListProductNamesLocator().allTextContents();
    }

    async openProduct(name: string): Promise<void> {
        await this.getCardByTitle(name).click();
    }

    async sortBy(sortOption: string): Promise<void> {
        await this.sortSelect.selectOption(sortOption);
    }

    getListProductPricesLocator(): Locator {
        return this.price;
    }

    getVisibleProductCards(): Locator {
        return this.cards.filter({ has: this.page.locator('[data-testid="product-price"]:visible') });
    }


    async getListProductPrices(): Promise<number[]> {
        const pricesText = await this.price.allTextContents();
        return pricesText
            .map(text => parseFloat(text.replace('$', '').trim()))
            .filter(price => !isNaN(price));
        }


    async selectCategoryCheckbox(label: string): Promise<void> {
        const checkbox = this.page.getByRole('checkbox', { name: label });
        await checkbox.check();
    }

    async getAllProductNames(): Promise<string[]> {
        return await this.getListProductNames();
    }


  isSorted(arr: number[], compareFn: (a: number, b: number) => number): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (compareFn(arr[i], arr[i + 1]) > 0) return false;
    }
    return true;
  }

  async waitForSorted(compareFn: (a: number, b: number) => number, timeout = 5000, interval = 200): Promise<number[]> {
    const start = Date.now();
    let prices = await this.getListProductPrices();

    while (!this.isSorted(prices, compareFn) && Date.now() - start < timeout) {
      await this.page.waitForTimeout(interval);
      prices = await this.getListProductPrices();
    }

    return prices;
  }

}