# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandleFrames.spec.js >> frame
- Location: tests\HandleFrames.spec.js:30:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'name')
```

# Test source

```ts
  1  | // const { test, expect } = require('@playwright/test')
  2  | 
  3  | // test('Handle Frame', async ({ page }) => {
  4  | 
  5  | //     await page.goto('https://ui.vision/demo/webtest/frames/');
  6  | 
  7  | //     // Total Frames
  8  | 
  9  | //     const allFrame = await page.frames();
  10 | //     console.log("Number of frames: ", allFrame.length);
  11 | 
  12 | //     // Approach 1 : using name or url..
  13 | 
  14 | //     // const frameName = await page.frame("frameName"); // if name is present, we can use this method..
  15 | //     // const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html" });
  16 | //     // await frame1.locator('[name="mytext2"]').fill("Hello All..");
  17 |     
  18 | //     // // Approach 2 : Using frameLocator
  19 | 
  20 | //     // const inputBox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
  21 | //     // inputBox.fill('Good Evening');
  22 | //     const inputBox = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');    
  23 | //     inputBox.fill("Hi")
  24 | 
  25 | //     await page.waitForTimeout(2000);
  26 | 
  27 | // });
  28 | 
  29 | import{test,expect} from '@playwright/test'
  30 | test('frame', async({page})=>{
  31 | 
  32 |     await page.goto('https://ui.vision/demo/webtest/frames/');
  33 | 
  34 |     //total frames
> 35 |     const allFrame = await page.frame();
     |                                 ^ TypeError: Cannot read properties of undefined (reading 'name')
  36 |     console.log("No of frames",allFrame.length);
  37 | 
  38 |    
  39 | })
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | 
```