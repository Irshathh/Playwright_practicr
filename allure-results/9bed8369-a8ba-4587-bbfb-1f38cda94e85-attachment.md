# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouseHover.spec.js >> Mouse Hover
- Location: tests\mouseHover.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[text()="Hello, sign in"]')
    - waiting for" https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=e9]
    - button "Continue shopping" [ref=e18] [cursor=pointer]
  - generic [ref=e21]:
    - link "Conditions of Use & Sale" [ref=e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Mouse Hover', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.amazon.in/');
  6  | 
  7  |     const hello = await page.locator('//span[text()="Hello, sign in"]');
  8  |     const account = await page.locator('//span[text()="Your Account"]');
  9  | 
  10 |     // Mouse Hover
  11 | 
> 12 |     await hello.hover();
     |                 ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  13 |         await page.waitForTimeout(5000);
  14 | 
  15 |     await account.hover();
  16 | 
  17 |     await page.waitForTimeout(5000);
  18 | 
  19 | });
```