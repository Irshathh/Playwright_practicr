# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.spec.js >> prompt alert
- Location: tests\alerts.spec.js:106:5

# Error details

```
TypeError: dialog.defaultValue(...).toContain is not a function
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//button[text()="Prompt Alert"]')
    - locator resolved to <button id="promptBtn" onclick="myFunctionPrompt()">Prompt Alert</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
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
  60  | import {test, expect} from '@playwright/test'
  61  | 
  62  | test.skip('simple alert', async({page})=>{
  63  | 
  64  |     await page.goto('https://testautomationpractice.blogspot.com/')
  65  | 
  66  |     // Enabling dialog alert 
  67  | 
  68  |     page.on('dialog', async dialog=>{
  69  | 
  70  |         expect (dialog.type()).toContain('alert');
  71  |         expect (dialog.message()).toContain('I am an alert box!');
  72  |         await dialog.accept();
  73  | 
  74  |     });
  75  | 
  76  |     await page.locator('//button[text()="Simple Alert"]').click()
  77  | 
  78  |     await page.waitForTimeout(3000)
  79  | });
  80  | 
  81  | test.skip('confirm alert', async({page})=>{
  82  | 
  83  |     await page.goto('https://testautomationpractice.blogspot.com/');
  84  | 
  85  |     // Enabling dialog window handler
  86  |     page.on('dialog', async dialog=>{
  87  | 
  88  |         expect (dialog.type()).toContain('confirm');
  89  |         expect (dialog.message()).toContain('Press a button!');
  90  |         //await dialog.accept(); // close by using OK button
  91  |         await dialog.dismiss();// close using cancel Button
  92  | 
  93  |     });
  94  | 
  95  |     await page.locator('//button[text()="Confirmation Alert"]').click();
  96  |     await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
  97  | 
  98  |     await page.waitForTimeout(4000)
  99  | 
  100 | 
  101 | 
  102 | })
  103 | 
  104 | 
  105 | 
  106 | test('prompt alert', async({page})=>{
  107 | 
  108 |     await page.goto('https://testautomationpractice.blogspot.com/');
  109 | 
  110 |     // Enabling dialog window handler
  111 |     page.on('dialog', async dialog=>{
  112 | 
  113 |         expect (dialog.type()).toContain('prompt');
  114 |         expect (dialog.message()).toContain('Please enter your name:');
  115 |         expect(dialog.defaultValue().toContain('Harry Potter'));
  116 |         await (dialog.accept('Irshad')); // Close by using Ok button
  117 | 
  118 |         //await dialog.accept(); // close by using OK button
  119 |         
  120 | 
  121 |     });
  122 | 
> 123 |     await page.locator('//button[text()="Prompt Alert"]').click();
      |                                                           ^ Error: locator.click: Test ended.
  124 |     await expect(page.locator('#demo')).toHaveText('Hello Irshad! How are you today?');
  125 | 
  126 |     await page.waitForTimeout(4000);
  127 | 
  128 | 
  129 | 
  130 | })
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
```