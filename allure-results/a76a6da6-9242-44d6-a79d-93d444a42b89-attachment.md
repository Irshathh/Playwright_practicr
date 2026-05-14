# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handleIframes.spec.js >> Handle I Frames
- Location: tests\handleIframes.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ui`.vision/demo/webtest/frames/
Call log:
  - navigating to "https://ui`.vision/demo/webtest/frames/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: "Check if there is a typo in ui`.vision."
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running windows network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('Handle I Frames', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://ui`.vision/demo/webtest/frames/');
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ui`.vision/demo/webtest/frames/
  6  | 
  7  |     const frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
  8  |     frame3.locator('[name="mytext3"]').fill("Playwright");
  9  | 
  10 | 
  11 |     // Inner (or) Nested (or) Child Frame
  12 | 
  13 |     const childFrame = await frame3.childFrames();
  14 |     await childFrame[0].locator('//div[@id="i9"]').check();
  15 | 
  16 | 
  17 | 
  18 |     await page.waitForTimeout(2000);
  19 | });
```