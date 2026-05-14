# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePageTest2.spec.js >> Home page
- Location: tests\HomePageTest2.spec.js:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "STONE"
Received: ""

Call log:
  - Expect "toHaveTitle" with timeout 5000ms

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Home page', async({page})=>{
  4  | 
  5  |     await page.goto('https://demoblaze.com/');
  6  | 
  7  |     const pageTitle = await page.title(); 
  8  |     console.log(pageTitle);
> 9  |     expect(page).toHaveTitle("STONE");
     |                  ^ Error: expect(page).toHaveTitle(expected) failed
  10 |  
  11 | 
  12 | 
  13 | }) 
  14 | 
  15 | 
```