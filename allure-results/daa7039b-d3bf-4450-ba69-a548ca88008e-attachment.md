# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertion2.spec.js >> Assertions
- Location: tests\assertion2.spec.js:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "nopCommerce demo store. Register"
Received: "Just a moment..."
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "Just a moment..."

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for www.nopcommerce.com" [ref=e5]
        - heading "www.nopcommerce.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: 9f0f3e1f6837a7b0
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
  3  | test('Assertions', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fdemo%3Fsrsltid%3DAfmBOorm9MNxIkNEZA3kP8c3SYOlPBlwDP53415-f1UyF14rBS-xbM1Y');
  6  | 
  7  |     await expect(page).toHaveURL('https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fdemo%3Fsrsltid%3DAfmBOorm9MNxIkNEZA3kP8c3SYOlPBlwDP53415-f1UyF14rBS-xbM1Y')
  8  | 
> 9  |     await expect(page).toHaveTitle('nopCommerce demo store. Register')
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  10 | 
  11 | 
  12 | })
  13 | 
  14 | 
```