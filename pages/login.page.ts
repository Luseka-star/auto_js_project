import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from './fragments/header.fragment';


export class LoginPage {
    page: Page;
    header: HeaderFragment;
    emailField: Locator;
    passwordField: Locator;
    submitButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.header = new HeaderFragment(page);
        this.emailField = this.page.locator('[data-test="email"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.submitButton  = this.page.locator('[data-test="login-submit"]');
    }

    async performLogin(email: string, password: string): Promise<void>{
        await this.emailField.fill(email);
        await this.passwordField.fill(password);

        await this.submitButton.click();
    }
 
}