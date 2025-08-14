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
        this.accountName = page.getByTestId('nav-menu');
        this.logoLink = page.locator('.navbar-brand');
        this.navigationHome = page.getByTestId ('nav-home');
        this.navigationCategories = page.getByTestId('nav-categories');
        this.navigationContact = page.getByTestId('nav-contact');
        this.languageSelect = page.getByTestId('language-select');
        this.myAccount = page.getByTestId('nav-my-account');
        this.myFavorites = page.getByTestId('nav-my-favorites');
        this.myProfile = page.getByTestId('nav-my-profile');
        this.myInvoices = page.getByTestId('nav-my-invoices');
        this.myMessages = page.getByTestId('nav-my-messages');
        this.signOut = page.getByTestId('nav-sign-out');
    }

    getLanguageLocator(lang: LanguageCode): Locator{
        return this.page.getByTestId(`lang-${lang}`);
    }

    async showDropdownMenu(){
        await this.accountName.click();
    }

}