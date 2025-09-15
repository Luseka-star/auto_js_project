import { test, expect } from '@playwright/test';
import { AccountPage } from '../pages/account.page';
import path from 'path';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

 
test.use({storageState: authFile});


test('Verify success login of existed user', async ({ page }) => {
  // test.skip(!!process.env.GITHUB_ACTIONS, 'Skip it in GitHub Actions');
   
 // const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  
  await page.goto('/account');

  await expect(accountPage.heading).toContainText('My account');
  await expect(accountPage.header.accountName).toBeVisible();

});

