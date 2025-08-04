import { test, expect } from '@playwright/test';

test('Verify login of existed user', async ({ page }) => {
  await page.goto('/auth/login');
  await page.getByRole('textbox', { name: 'Email address'}).fill('customer@practicesoftwaretesting.com');
  await page.getByRole('textbox', { name: 'Password'}).fill('welcome01');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await expect(page.getByRole('heading', { name: 'My account'})).toContainText('My account');
  await expect(page.getByRole('button', { name: 'Jane Doe'})).toBeVisible();

});
пше 