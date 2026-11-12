import { test, expect } from '@playwright/test';

test('user can log in to City Services', async ({ page }) => {
  // 1. Open the login page
  await page.goto('http://localhost:5173/login');

  // 2. Locate and fill the Email field
  const emailInput = page.locator('[data-testid="cs-login-email"] input');
  await emailInput.fill('john@example.com');

  // 3. Locate and fill the Password field  
  const passwordInput = page.locator('[data-testid="cs-login-password"] input[type="password"]');
  await passwordInput.fill('password123');

  // 4. Locate and click the Login button
  const loginButton = page.locator('[data-testid="cs-login-submit"]');
  await loginButton.click();
  
  // 5. Wait for and verify the redirect to the dashboard
  await expect(page).toHaveURL('http://localhost:5173/dashboard');
});