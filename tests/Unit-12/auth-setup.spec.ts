import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { users } from '../test-data/users';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('Login via UI and save session', async ({ page }) => {
    // test.skip(!!process.env.GITHUB_ACTIONS, 'Skip it in GitHub Actions');

  const loginPage = new LoginPage(page);

  await page.goto('/auth/login');
  await loginPage.performLogin(users[0].email, users[0].password);
  await expect(page).toHaveURL('/account');

  await page.context().storageState({ path: authFile });
});