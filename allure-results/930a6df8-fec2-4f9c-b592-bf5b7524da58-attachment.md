# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handleIframes.spec.js >> Handle I Frames
- Location: tests\handleIframes.spec.js:3:1

# Error details

```
TypeError: childFrame.locator is not a function
```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('[name="mytext3"]')
    - locator resolved to <input size="25" type="text" name="mytext3"/>
    - fill("Playwright")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('Handle I Frames', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://ui.vision/demo/webtest/frames/');
  6  | 
  7  |     const frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
> 8  |     frame3.locator('[name="mytext3"]').fill("Playwright");
     |                                        ^ Error: locator.fill: Test ended.
  9  | 
  10 | 
  11 |     // Inner (or) Nested (or) Child Frame
  12 | 
  13 |     const childFrame = await frame3.childFrames();
  14 |     await childFrame.locator('//div[@id="i9"]').check();
  15 | 
  16 | 
  17 | 
  18 |     await page.waitForTimeout(2000);
  19 | });
```