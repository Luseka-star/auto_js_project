import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from './fragments/header.fragment';


export class HomePage{
    page: Page;
    header: HeaderFragment;

    banner: Locator;
    


    constructor(page: Page){
        this.page = page;
        this.header = new HeaderFragment(page);
        this.banner = this.page.locator('.img-fluid');
       
    }

     getCardByTitle(title: string): Locator {
        return this.page.locator(`.card:has(h5:has-text("${title}"))`);
    }
}