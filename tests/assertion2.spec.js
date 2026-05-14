const { test, expect } = require('@playwright/test');

test('Assertions - FINAL CLEAN SITE', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1) URL
    await expect(page).toHaveURL(/testautomationpractice/);

    // 2) Title
    await expect(page).toHaveTitle(/Automation Testing Practice/);

    // 3) Visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // 4) Enabled (Name textbox)
    const nameInput = page.locator('#name');
    await expect(nameInput).toBeEnabled();

    // 5) Radio button
    // const maleRadio = page.locator('#male');
    // await maleRadio.check();
    // await expect(maleRadio).toBeChecked();

    const maleRadio = page.locator('#male');
    await maleRadio.check();
    await expect(maleRadio).toBeChecked

    // Checkbox
    const sundayCheckbox = page.locator('#sunday');
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    // 6) toHaveText
    await expect(heading).toHaveText('Automation Testing Practice');

    // 7) toContainText
    await expect(heading).toContainText('Automation');

    // 8) toHaveValue
    
    await nameInput.fill('Irshad');
    await expect(nameInput).toHaveValue('Irshad');

    // // 9) toHaveCount (Days checkboxes)
    // const checkboxes = page.locator('input[type="checkbox"]');
    // await expect(checkboxes).toHaveCount(7);

});