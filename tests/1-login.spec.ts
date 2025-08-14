import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';
import users from './test-data/login-credentials.json';





test('Verify success login of existed user', async ({ page }) => {
   test.skip(!!process.env.GITHUB_ACTIONS, 'Skip it in GitHub Actions');
   
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  
  await page.goto('/auth/login');

  await loginPage.performLogin(users[0].username, users[0].password);
  await expect(page).toHaveURL('/account');
  await expect(accountPage.heading).toContainText('My account');
  await expect(accountPage.header.accountName).toBeVisible();

});

