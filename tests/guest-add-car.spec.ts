import { test, expect } from '@playwright/test';

test('guest can add a car', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();
  await expect(page).toHaveURL(/\/panel\/garage/);

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.locator('#addCarBrand').selectOption('Audi');
  await page.locator('#addCarModel').selectOption('TT');
  await page.locator('#addCarMileage').fill('12000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  await expect(page.getByText('Audi TT')).toBeVisible();
});