import { test, expect } from '@playwright/test';

test('guest can add fuel expense', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();

  // Додаємо авто
  await page.getByRole('button', { name: 'Add car' }).click();
  await page.locator('#addCarBrand').selectOption('Audi');
  await page.locator('#addCarModel').selectOption('TT');
  await page.locator('#addCarMileage').fill('12000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // Додаємо витрати пального
  await page.getByRole('button', { name: 'Add fuel expense' }).click();
  await page.locator('#addExpenseMileage').fill('12500');
  await page.locator('#addExpenseLiters').fill('20');
  await page.locator('#addExpenseTotalCost').fill('1000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // Перевірка URL (в додатку шлях саме /panel/expenses)
  await expect(page).toHaveURL(/\/panel\/expenses/);
});