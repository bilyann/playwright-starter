import { test, expect } from '@playwright/test';

test('guest can search instructions', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();

  // 1. Переходимо в розділ Instructions
  await page.locator('a[href="/panel/instructions"]').first().click();
  await expect(page).toHaveURL(/\/panel\/instructions/);

  // 2. Обираємо марку "BMW"
  await page.locator('#brandSelectDropdown').click();
  await page.locator('.brand-select-dropdown_menu .dropdown-item', { hasText: 'BMW' }).click();

  // 3. Обираємо модель "X5"
  await page.locator('#modelSelectDropdown').click();
  await page.locator('.model-select-dropdown_menu .dropdown-item', { hasText: 'X5' }).click();

  // 4. Натискаємо Search
  await page.getByRole('button', { name: 'Search' }).click();

  // 5. Перевіряємо точний список результатів
  await expect(page.locator('.instructions_list')).toBeVisible();
});