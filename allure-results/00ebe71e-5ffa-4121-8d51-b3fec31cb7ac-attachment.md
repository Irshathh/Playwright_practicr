# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.spec.js >> Confirmation alert
- Location: tests\alerts.spec.js:82:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1   | // const { test, expect } = require('@playwright/test')
  2   | 
  3   | // test.skip('Alert with OK', async ({ page }) => {
  4   | 
  5   | //     await page.goto('https://testautomationpractice.blogspot.com/');
  6   | 
  7   | //     // Enabling dialog window handler
  8   | 
  9   | //     page.on('dialog', async dialog => {
  10  | //         expect(dialog.type()).toContain('alert');
  11  | //         expect(dialog.message()).toContain('I am an alert box!');
  12  | //         await dialog.accept();
  13  | //     });
  14  | 
  15  | //     await page.locator('//button[text()="Simple Alert"]').click();
  16  | //     await page.waitForTimeout(2000);
  17  | 
  18  | // });
  19  | 
  20  | // test.skip('Confirm Alert', async ({ page }) => {
  21  | 
  22  | //     await page.goto('https://testautomationpractice.blogspot.com/');
  23  | 
  24  | //     // Enabling dialog window handler
  25  | 
  26  | //     page.on('dialog', async dialog => {
  27  | //         expect(dialog.type()).toContain('confirm');
  28  | //         expect(dialog.message()).toContain('Press a button!');
  29  | //         await dialog.accept(); // close by using OK button
  30  | //         //await dialog.dismiss(); // close by using Cancel Button
  31  | //     });
  32  | 
  33  | //     await page.locator('//button[text()="Confirmation Alert"]').click();
  34  | //     await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
  35  | //     await page.waitForTimeout(2000);
  36  | 
  37  | // });
  38  | 
  39  | // test('Prompt Alert', async ({ page }) => {
  40  | 
  41  | //     await page.goto('https://testautomationpractice.blogspot.com/');
  42  | 
  43  | //     // Enabling dialog window handler
  44  | 
  45  | //     page.on('dialog', async dialog => {
  46  | //         expect(dialog.type()).toContain('prompt');
  47  | //         expect(dialog.message()).toContain('Please enter your name:');
  48  | //         expect(dialog.defaultValue()).toContain('Harry Potter');
  49  | //         await dialog.accept('Irshad'); // close by using OK button
  50  | //         //await dialog.dismiss(); // close by using Cancel Button
  51  | //     });
  52  | 
  53  | //     await page.locator('//button[text()="Prompt Alert"]').click();
  54  | //     await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Irshad! How are you today?')
  55  | //     await page.waitForTimeout(2000);
  56  | 
  57  | // });
  58  | 
  59  | 
  60  | 
  61  | const { test, expect } = require('@playwright/test')
  62  | 
  63  | test.skip('Alert with OK', async ({ page }) => {
  64  | 
  65  |    await page.goto('https://testautomationpractice.blogspot.com/');
  66  | 
  67  |    // Enabling dialog simple alert
  68  | 
  69  |    page.on('dialog',async dialog=>{
  70  |     expect(dialog.type()).toContain('alert');
  71  |     expect(dialog.message()).toContain('I am an alert box!');
  72  |     await dialog.accept();
  73  |    });
  74  | 
  75  |    await page.locator('//button[text()="Simple Alert"]').click();
  76  |    
  77  | 
  78  |    await page.waitForTimeout(2000);
  79  | 
  80  | })
  81  | 
  82  | test ('Confirmation alert', async ({ page }) => {
  83  | 
> 84  |    await page.goto('https://testautomationpractice.blogspot.com/');
      |               ^ Error: page.goto: Target page, context or browser has been closed
  85  | 
  86  |    //Enabling dialog confirmation alert
  87  | 
  88  | 
  89  |    page.on('dialog',async dialog=>{
  90  |     expect(dialog.type()).toContain('confirm');
  91  |     expect(dialog.message()).toContain('Press a button!');
  92  |     //await dialog.accept(); // Close by using Ok button
  93  |     await dialog.dismiss(); //Close by using cancel button
  94  |    });
  95  | 
  96  |    await page.locator('//button[text()="Confirmation Alert"]').click();
  97  |    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
  98  |    
  99  | 
  100 |    await page.waitForTimeout(4000);
  101 | });
  102 | 
  103 | 
  104 | test ('Prompt alert', async ({ page }) => {
  105 | 
  106 |    await page.goto('https://testautomationpractice.blogspot.com/');
  107 | 
  108 |    //Enabling dialog confirmation alert
  109 | 
  110 | 
  111 |    page.on('dialog',async dialog=>{
  112 |     expect(dialog.type()).toContain('prompt');
  113 |     expect(dialog.message()).toContain('Please enter your name:');
  114 |     expect(dialog.defaultValue()).toContain('Harry Potter');
  115 |     await dialog.accept('Silwin'); // Close by using Ok button
  116 |     //await dialog.dismiss(); //Close by using cancel button
  117 |    });
  118 | 
  119 |    await page.locator('//button[text()="Prompt Alert"]').click();
  120 |    await expect(page.locator('#demo')).toHaveText('Hello Silwin! How are you today?')
  121 |    
  122 | 
  123 |    await page.waitForTimeout(4000);
  124 | });
  125 | 
  126 | 
  127 | 
  128 | 
  129 | 
  130 | 
  131 | 
  132 | 
  133 | 
  134 | 
  135 | 
  136 | 
  137 | 
  138 | 
  139 | 
  140 | 
  141 | 
  142 | 
  143 | 
  144 | 
  145 | 
  146 | 
  147 | 
  148 | 
  149 | 
  150 | 
  151 | 
  152 | 
  153 | 
  154 | 
  155 | 
  156 | 
  157 | 
  158 | 
```