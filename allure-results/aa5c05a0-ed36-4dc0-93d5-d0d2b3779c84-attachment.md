# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: report.spec.js >> Meesho
- Location: tests\report.spec.js:15:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Online Shopping Site for Fashion, Electronics, Home & More | Meesho"
Received: "Access Denied"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    5 × unexpected value ""
    3 × unexpected value "Access Denied"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Access Denied" [level=1] [ref=e2]
  - text: You don't have permission to access "http://www.meesho.com/" on this server.
  - paragraph [ref=e3]: "Reference #18.a88cd017.1778316029.1ec31d8f"
  - paragraph [ref=e4]: https://errors.edgesuite.net/18.a88cd017.1778316029.1ec31d8f
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Amazon', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.amazon.in/');
  6  |     await expect(page).toHaveURL('https://www.amazon.in/');
  7  | });
  8  | 
  9  | test('Flipkart', async ({ page }) => {
  10 | 
  11 |     await page.goto('https://www.flipkart.com/');
  12 |     await expect(page).toHaveURL('https://www.flipkart.com/');
  13 | });
  14 | 
  15 | test('Meesho', async ({ page }) => {
  16 | 
  17 |     await page.goto('https://www.meesho.com/');
> 18 |     await expect(page).toHaveTitle('Online Shopping Site for Fashion, Electronics, Home & More | Meesho');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  19 | })
```