import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { sortOptions} from '../src/enums/categories';


test.describe('Verify user can perform sorting by', () => {
  
  const nameSorts = [
    { name: 'Name (A - Z)', sort: sortOptions.nameASC },
    { name: 'Name (Z - A)', sort: sortOptions.nameDESC },
  ];

  nameSorts.forEach(({ name, sort }) => {
    test(`Sort products by ${name}`, async ({ page }) => {
      const homePage = new HomePage(page);

      await page.goto('/');
      await homePage.sortSelect.click();
      await homePage.sortBy(sort);

      const productNameList = await homePage.getListProductNames();

      const expectedNames = [...productNameList].sort((a, b) =>
        sort === sortOptions.nameASC ? a.localeCompare(b) : b.localeCompare(a)
      );

      expect(productNameList).toEqual(expectedNames);
    });
  });

  const priceSorts = [
    { label: 'Price (Low - High)', sort: sortOptions.priceASC },
    { label: 'Price (High - Low)', sort: sortOptions.priceDESC },
  ];

  priceSorts.forEach(({ label, sort }) => {
    test(`Sort products by ${label}`, async ({ page }) => {
      const homePage = new HomePage(page);

      await page.goto('/');

      await homePage.sortBy(sort);
      await expect(homePage.cards.first()).toBeVisible();

      const productPrices = await homePage.getListProductPrices();
      const expectedPrices = [...productPrices].sort((a, b) =>
        sort === sortOptions.priceASC ? a - b : b - a
      );

      expect(productPrices).toEqual(expectedPrices);
    });
  });
});
