# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> Element Screenshot
- Location: tests\screenshot.spec.js:20:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]//img[@alt="Samsung | Starting ₹7,499"]')
    - waiting for" https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"
    - waiting for" https://www.amazon.in/events/greatsummersale/?_encoding=UTF8&ref_=DRQC1&pd_rd_w=VHsLT&content-id=amzn1.sym.93654b75-600a-43ad-a27a-a44dc9edc358&pf_rd_p=93654b75-600a-43ad-a27a-a44dc9edc358&pf_rd_r=KN…" navigation to finish...
    - navigated to "https://www.amazon.in/events/greatsummersale/?_encoding=UTF8&ref_=DRQC1&pd_rd_w=VHsLT&content-id=amzn1.sym.93654b75-600a-43ad-a27a-a44dc9edc358&pf_rd_p=93654b75-600a-43ad-a27a-a44dc9edc358&pf_rd_r=KN…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Amazon.in" [ref=e3] [cursor=pointer]:
    - /url: https://www.amazon.in/ref=cs_503_logo/
    - img "Amazon.in" [ref=e4]
  - paragraph [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e7]: Oops!
      - generic [ref=e8]:
        - text: It's rush hour and traffic is piling up on that page. Please try again in a short while.
        - text: If you were trying to place an order, it will not have been processed at this time.
  - paragraph [ref=e9]:
    - generic [ref=e10]:
      - img "*" [ref=e11]
      - link "Go to the Amazon.in home page to continue shopping" [ref=e13] [cursor=pointer]:
        - /url: https://www.amazon.in/ref=cs_503_link/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('Page Screenshot', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.amazon.in/');
  6  |     await page.waitForTimeout(4000);
  7  |     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'HomePage.png' });
  8  | 
  9  | });
  10 | 
  11 | test('FullPage Screenshot', async ({ page }) => {
  12 | 
  13 |     await page.goto('https://www.amazon.in/');
  14 |     await page.waitForTimeout(4000);
  15 |     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: true });
  16 | 
  17 | });
  18 | 
  19 | 
  20 | test.only('Element Screenshot', async ({ page }) => {
  21 | 
  22 |     await page.goto('https://www.amazon.in/');
  23 |     await page.waitForTimeout(4000);
  24 |     await page.locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]//img[@alt="Samsung | Starting ₹7,499"]')
> 25 |         .screenshot({ path: 'tests/screenshot/' + Date.now() + 'ElementScreenshot.png' });
     |          ^ Error: locator.screenshot: Test timeout of 30000ms exceeded.
  26 | 
  27 | });
```