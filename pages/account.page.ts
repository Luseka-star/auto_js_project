import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from './fragments/header.fragment';

export class AccountPage{
    page: Page;
    header: HeaderFragment;

    heading: Locator;
    favorites: Locator;
    profile: Locator;
    invoices: Locator;
    messages: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.header = new HeaderFragment(page);
        this.heading = page.locator('data-test="page-title"');
        this.favorites = page.getByRole('button', { name: 'Favorites'});
        this.profile = page.getByRole('button', { name: 'Profile'});
        this.invoices = page.getByRole('button', { name: 'Invoices'});
        this.messages = page.getByRole('button', { name: 'Messages'});
    }
      
}