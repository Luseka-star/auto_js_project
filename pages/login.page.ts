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
        this.emailField = this.page.getByRole('textbox', { name: 'Email address'});
        this.passwordField = this.page.getByRole('textbox', { name: 'Password'});
        this.submitButton  = this.page.getByRole('button', {name: 'Login'});
    }

    async performLogin(email: string, password: string): Promise<void>{
        await this.emailField.fill(email);
        await this.passwordField.fill(password);

        await this.submitButton.click();
    }
 
}