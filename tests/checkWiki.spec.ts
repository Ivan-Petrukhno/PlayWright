import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/wikipedia/);
});

test('check English page of wiki',async({page})=>{
  await page.goto('https://www.wikipedia.org/');
  await page.locator("xpath=//strong[text()='English']").click();
 let text = page.getByText('Wikipedia', { exact: true }); 
  await expect(text).toBeVisible();
})