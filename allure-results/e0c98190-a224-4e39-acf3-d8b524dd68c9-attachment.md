# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePageTest3.spec.js >> Home page
- Location: tests\HomePageTest3.spec.js:3:5

# Error details

```
Error: page.title: Test ended.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Home page', async({page})=>{
  4  | 
  5  |     await page.goto('https://demoblaze.com/');
  6  |     
  7  |      
> 8  |     const pageTitle = page.title();
     |                            ^ Error: page.title: Test ended.
  9  |     console.log(pageTitle);
  10 | 
  11 | 
  12 | 
  13 | })
  14 | 
  15 | 
```