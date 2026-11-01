import { test, expect } from '@playwright/test';

test('discovery locators', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();
  await expect(page).toHaveURL(/.*panel\/garage/);
  
  console.log('--- Garage Page ---');
  // Check Add Car button
  const addCarBtn = page.getByRole('button', { name: 'Add car' });
  console.log('Add car button visible:', await addCarBtn.isVisible());
  
  await addCarBtn.click();
  console.log('--- Add Car Modal ---');
  console.log('Brand visible:', await page.locator('#addCarBrand').isVisible());
  console.log('Model visible:', await page.locator('#addCarModel').isVisible());
  console.log('Mileage visible:', await page.locator('#addCarMileage').isVisible());
  await page.getByRole('button', { name: 'Cancel' }).click();

  // Sidebar
  console.log('--- Sidebar ---');
  console.log('Instructions link visible:', await page.getByRole('link', { name: 'Instructions' }).isVisible());
  
  await page.getByRole('link', { name: 'Instructions' }).click();
  console.log('--- Instructions Page ---');
  console.log('Brand select visible:', await page.locator('#selectCarBrand').isVisible() || await page.locator('#brandSelect').isVisible());
  console.log('Search button visible:', await page.getByRole('button', { name: 'Search' }).isVisible());
});
