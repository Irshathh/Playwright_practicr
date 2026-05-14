# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: annotations.spec.js >> Test 5
- Location: tests\annotations.spec.js:35:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 1
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | // ONLY 
  4  | 
  5  | // test.only('Test 1', async ({ page }) => {
  6  | //     console.log("This is Test 1");
  7  | 
  8  | // });
  9  | 
  10 | // SKIP
  11 | 
  12 | // test.skip('Test 2', async ({ page }) => {
  13 | //     console.log("This is Test 2");
  14 | 
  15 | // });
  16 | 
  17 | // test('Test 3', async ({ page, browserName }) => {
  18 | //     console.log("This is Test 3");
  19 | //     if (browserName === 'firefox') {
  20 | //         test.skip();
  21 | //     }
  22 | 
  23 | // });
  24 | 
  25 | // FIX ME
  26 | 
  27 | // test('Test 4', async ({ page }) => {
  28 | //     test.fixme()
  29 | //     console.log("This is Test 4");
  30 | // });
  31 | 
  32 | 
  33 | // FAIL
  34 | 
  35 | test('Test 5', async ({ page }) => {
  36 |     test.fail(); // expected
  37 |     console.log("This is Test 5");
  38 |     //expect(1).toBe(1);  // actual 
> 39 |     expect(1).toBe(0);
     |               ^ Error: expect(received).toBe(expected) // Object.is equality
  40 | });
  41 | 
  42 | // test('Test 6', async ({ page, browserName }) => {
  43 | //     console.log("This is Test 6");
  44 | //     if (browserName === 'chromium') {
  45 | //         test.fail(); //expected
  46 | //     }
  47 | // });
  48 | 
  49 | // SLOW
  50 | 
  51 | // test('Test 7', async ({ page }) => {
  52 | //     test.slow();
  53 | //     await page.goto('https://playwright.dev/docs/test-annotations#focus-a-test');
  54 | //     console.log("This is Test 7");
  55 | // });
```