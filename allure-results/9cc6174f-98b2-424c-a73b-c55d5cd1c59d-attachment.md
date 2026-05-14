# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inputBox.spec.js >> Handle Inputbox
- Location: tests\inputBox.spec.js:3:1

# Error details

```
ReferenceError: fill is not defined
```

```
Error: page.fill: value: expected string, got undefined
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('Handle Inputbox', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://testautomationpractice.blogspot.com/');
  6  | 
  7  |     await expect(page.locator('#name')).toBeVisible();
  8  |     await expect(page.locator('//input[@id="name"]')).toBeEditable();
  9  |     await expect(page.locator('//input[@id="name"]')).toBeEnabled();
  10 |     await expect(page.locator('//input[@id="name"]')).toBeEmpty();
  11 | 
  12 |     //await page.locator('//input[@id="name"]').fill("Good Afternoon");
> 13 |     page.fill("//input[@id='name']"),fill("irshad")
     |          ^ Error: page.fill: value: expected string, got undefined
  14 | 
  15 |     await page.waitForTimeout(2000);
  16 | 
  17 | });
```