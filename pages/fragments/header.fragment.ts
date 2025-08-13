export enum LanguageCode {
  DE = 'de',
  EN = 'en',
  FR = 'fr',
  ES = 'es',
  NL = 'nl',
  TR = 'tr'
}

import { Locator, Page } from "@playwright/test";

export class HeaderFragment{
    readonly page: Page;
    readonly accountName: Locator;
    readonly logoLink: Locator;
    readonly navigationHome: Locator;
    readonly navigationCategories: Locator;
    readonly navigationContact: Locator;
    readonly languageSelect: Locator;
    readonly myAccount: Locator;
    readonly myFavorites: Locator;
    readonly myProfile: Locator;
    readonly myInvoices: Locator;
    readonly myMessages: Locator;
    readonly signOut: Locator;


    constructor(page: Page){
        this.page = page;
        this.accountName = page.locator('[data-test="nav-menu"]');
        this.logoLink = page.locator('[class="navbar-brand"]');
        this.navigationHome = page.locator ('[data-test="nav-home"]');
        this.navigationCategories = page.locator('[data-test="nav-categories"]');
        this.navigationContact = page.locator('[data-test="nav-contact"]');
        this.languageSelect = page.locator('[data-test="language-select"]');
        this.myAccount = page.locator('[data-test="nav-my-account"]');
        this.myFavorites = page.locator('[data-test="nav-my-favorites"]');
        this.myProfile = page.locator('[data-test="nav-my-profile"]');
        this.myInvoices = page.locator('[data-test="nav-my-invoices"]');
        this.myMessages = page.locator('[data-test="nav-my-messages"]');
        this.signOut = page.locator('[data-test="nav-sign-out"]');
    }

    getLanguageLocator(lang: LanguageCode): Locator{
        return this.page.locator(`[data-test="lang-${lang}"]`);
    }

    async showDropdownMenu(){
        await this.accountName.click();
    }

}