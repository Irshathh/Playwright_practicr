# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertion.spec.js >> Assertions - FINAL STABLE
- Location: tests\Assertion.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#newsletter')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [ref=f34e3]:
        - button [ref=f34e4]:
          - img [ref=f34e5]
        - generic [ref=f34e7]:
          - button "Replay" [ref=f34e15]:
            - img [ref=f34e17] [cursor=pointer]
          - button "Learn more" [ref=f34e24] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Assertions - FINAL STABLE', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://automationexercise.com');
  6  | 
  7  |     // 1) URL
  8  |     await expect(page).toHaveURL(/automationexercise/);
  9  | 
  10 |     // 2) Title
  11 |     await expect(page).toHaveTitle(/Automation Exercise/);
  12 | 
  13 |     // 3) Visible
  14 |     const logo = page.locator('img[alt="Website for automation practice"]');
  15 |     await expect(logo).toBeVisible();
  16 | 
  17 |     // Go to Signup
  18 |     await page.getByRole('link', { name: 'Signup / Login' }).click();
  19 | 
  20 |     // 4) Enabled
  21 |     const nameInput = page.getByPlaceholder('Name');
  22 |     await expect(nameInput).toBeEnabled();
  23 | 
  24 |     // // 5) Radio
  25 |     // const radioBtn = page.locator('#id_gender1');
  26 |     // await radioBtn.check();
  27 |     // await expect(radioBtn).toBeChecked();
  28 | 
  29 |     // Checkbox
  30 |     const checkbox = page.locator('#newsletter');
> 31 |     await checkbox.check();
     |                    ^ Error: locator.check: Test timeout of 30000ms exceeded.
  32 |     await expect(checkbox).toBeChecked();
  33 | 
  34 |     // 6) Text
  35 |     const heading = page.locator('h2');
  36 |     await expect(heading.first()).toHaveText(/New User Signup!/);
  37 | 
  38 |     // 7) Contain text
  39 |     await expect(heading.first()).toContainText('Signup');
  40 | 
  41 |     // 8) Value
  42 |     await nameInput.fill('Irshad');
  43 |     await expect(nameInput).toHaveValue('Irshad');
  44 | 
  45 |     // 9) Count
  46 |     const menuItems = page.locator('.shop-menu ul li');
  47 |     await expect(menuItems).toHaveCount(8);
  48 | 
  49 | });
```