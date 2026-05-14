# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertion.spec.js >> Assertions - nopCommerce
- Location: tests\Assertion.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForFunction: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for demo.nopcommerce.com" [ref=e5]
        - heading "demo.nopcommerce.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: 9f0f69789bc07ab9
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e20] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e22] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Assertions - nopCommerce', async ({ page }) => {
  4  | 
  5  |     // Open page
  6  |     await page.goto('https://demo.nopcommerce.com/register');
  7  | 
  8  |     // 1) URL
  9  |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  10 | 
  11 |     // 2) Title (fix for "Just a moment..." issue)
> 12 |     await page.waitForFunction(() =>
     |                ^ Error: page.waitForFunction: Test timeout of 30000ms exceeded.
  13 |         document.title === 'nopCommerce demo store. Register'
  14 |     );
  15 |     await expect(page).toHaveTitle('nopCommerce demo store. Register');
  16 | 
  17 |     // 3) Visible (Logo)
  18 |     const logo = page.locator('.header-logo');
  19 |     await expect(logo).toBeVisible();
  20 | 
  21 |     // 4) Enabled (Search box)
  22 |     const textBox = page.locator('#small-searchterms');
  23 |     await expect(textBox).toBeEnabled();
  24 | 
  25 |     // 5) Radio button (Female)
  26 |     const radioBtn = page.locator('#gender-female');
  27 |     await radioBtn.check();
  28 |     await expect(radioBtn).toBeChecked();
  29 | 
  30 |     // Checkbox (Newsletter)
  31 |     const checkBox = page.locator('#Newsletter');
  32 |     await checkBox.check();
  33 |     await expect(checkBox).toBeChecked();
  34 | 
  35 |     // 6) toHaveText
  36 |     const heading = page.locator('.page-title h1');
  37 |     await expect(heading).toHaveText('Register');
  38 | 
  39 |     // 7) toContainText
  40 |     await expect(heading).toContainText('Regi');
  41 | 
  42 |     // 8) toHaveValue
  43 |     const nameInput = page.locator('#FirstName');
  44 |     await nameInput.fill('Irshad');
  45 |     await expect(nameInput).toHaveValue('Irshad');
  46 | 
  47 |     // 9) toHaveCount (Currency dropdown options)
  48 |     const options = page.locator('#customerCurrency option');
  49 |     await expect(options).toHaveCount(2);
  50 | 
  51 | });
```