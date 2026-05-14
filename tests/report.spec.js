const { test, expect } = require('@playwright/test');

test('Amazon', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/');
});

test('Flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveURL('https://www.flipkart.com/');
});

test('Demo Blaze', async ({ page }) => {

    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STOE');
})

