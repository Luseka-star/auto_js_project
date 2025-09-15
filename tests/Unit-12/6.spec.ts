import { test, expect } from '@playwright/test';
import { PowerTools} from '../src/enums/categories';
import { HomePage } from '../../pages/home.page';

test.describe('Verify user can filter products by category', () => {
  test('Filter products by PowerTools.Sander category', async ({ page }) => {
    const homePage = new HomePage(page);

     await page.goto('/'); 
    await homePage.selectCategoryCheckbox(PowerTools.Sander);

    const productNames = await homePage.getAllProductNames();
    productNames.forEach(name => {
      expect(name).toContain('Sander');
    });
  });
});
