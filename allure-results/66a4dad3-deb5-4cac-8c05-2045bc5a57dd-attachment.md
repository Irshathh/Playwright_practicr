# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> Element screenshot
- Location: tests\screenshot.spec.js:24:6

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test, expect} from '@playwright/test'
  4  | test('page screenshot', async({page})=>{
  5  | 
  6  |     await page.goto('https://www.amazon.in/');
  7  | 
  8  |     await page.waitForTimeout(4000);
  9  | 
  10 | 
  11 |     await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'Homepage.png'})
  12 |    
  13 | })
  14 | 
  15 | test('Full page screenshot',async({page})=>{
  16 |     await page.goto('https://www.amazon.in/')
  17 | 
  18 |     await page.waitForTimeout(5000)
  19 |     
  20 |     await page.screenshot({path: 'tests/screenshot' + 'Fullpage.png', fullPage: true})
  21 |     
  22 | })
  23 | 
  24 | test.only('Element screenshot', async({page})=>{
  25 |     await page.goto('https://www.amazon.in/LG-Convection-Microwave-MC3286BRUM-Black/dp/B01LWE0QJK/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.pG9HwZY4tllVFOZNtvU_7Vv0jJMjzQ_6mAZCvK5RBbfO5O32NGYbnbVepuKs9wo5vpLV3KqcPRFKC_y_C0K_C-o6OdL1NShl87yjPLazs1IZDIJxJ9n0c0IkxA8GaowxGI9jAP4jh3wCPiaPvrfsiLkZbJWB4fW3vKG_jlv8UTgHQjQzX0sW7-Blgu26dK9XP_OSlPuVQRQunmIiHqF_cw.x0k50ie6xxskSWT_y71qNGdgOoHoLEms6iFdCBLUiIc&dib_tag=se&pd_rd_r=b86ec403-a54b-4f4f-84ec-34fd3c066d47&pd_rd_w=UrbBF&pd_rd_wg=F8hNq&qid=1778135295&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-2&th=1')
> 26 |     await page.waitForTimeout(5000)
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  27 |     await page.locator('#sobe_d_b_ms_2_2').screenshot({path:'tests/screenshot'} + "Oven.png")
  28 | 
  29 |     
  30 | })
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
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
```