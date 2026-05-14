# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BuiltinLocators.spec.js >> In built locators
- Location: tests\BuiltinLocators.spec.js:56:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | // Locators in -in built...
  2  | 
  3  | // page.getByAltText()  -> to locate an element, usually image, by its text alternatives..
  4  | // page.getByPlaceholder() -> to locate an input by placeholder..
  5  | // page.getByRole()  -> to locate by explicit and implicit accessibility attribute..
  6  | // page.getByText()  -> to locate by text content..
  7  | // page.getByLabel()  -> to locate a form control by associated labels text..
  8  | // page.getByTitle()  -> to locate an element by its title attribute..
  9  | // page.getByTestId()  -> to locate an element based on its data-tested attribute..
  10 | 
  11 | 
  12 | // import {test, expect} from '@playwright/test'
  13 | 
  14 | // test('In Built locators', async({page})=>{
  15 | 
  16 | //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  17 | 
  18 | //     //  page.getByAltText() --> to locate an element, usually image
  19 |     
  20 | 
  21 | //     const logo = await page.getByAltText('company-branding');
  22 | //     await expect(logo).toBeVisible();
  23 | 
  24 | //     //getByPlaceholder() --> to locate an input by placehold
  25 | 
  26 | //     await page.getByPlaceholder('Username').fill('Admin');
  27 | //     await page.getByPlaceholder('Password').fill('admin123');
  28 | 
  29 | //     // page.getByRole() --> to locate by explicit and implicit 
  30 | 
  31 | //     await page.getByRole("button", {type : "submit"}).click();
  32 | 
  33 | //     // page.getByText() --> to locate by text content
  34 | 
  35 | //     const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
  36 | //     await expect(page.getByText(name)).toBeVisible();
  37 | 
  38 | //     await page.waitForTimeout(3000);
  39 | 
  40 | //     // page.getByLabel()  -> to locate a form control by associated labels text..
  41 | 
  42 | //     await page.getByLabel('Employee Name');
  43 |    
  44 | 
  45 | // })
  46 | 
  47 | // page.getByAltText()  -> to locate an element, usually image, by its text alternatives..
  48 | // page.getByPlaceholder() -> to locate an input by placeholder..
  49 | // page.getByRole()  -> to locate by explicit and implicit accessibility attribute..
  50 | // page.getByText()  -> to locate by text content..
  51 | // page.getByLabel()  -> to locate a form control by associated labels text..
  52 | // page.getByTitle()  -> to locate an element by its title attribute..
  53 | // page.getByTestId()  -> to locate an element based on its data-tested attribute.\
  54 | 
  55 | import {test, expect} from '@playwright/test'
  56 | test('In built locators', async({page})=>{
> 57 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  58 | 
  59 |     // page.getByAltText()- to locate an element, usually image
  60 | 
  61 |     const logo = await page.getByAltText('company-branding');
  62 |     await expect(logo).toBeVisible();
  63 | 
  64 | 
  65 |     //page.getbyplaceholder() --> to locate an input by placeholder
  66 |     await page.getByPlaceholder('Username').fill('Admin');
  67 |     await page.getByPlaceholder('Password').fill('admin123');
  68 | 
  69 |     //page.getByrole() --> to locate by explicit and implicit
  70 |     await page.getByRole("button",{type: "submit"}).click()
  71 | 
  72 |     //page.getByText() --> to locate by text content
  73 |     const name = await page.locator('.oxd-userdropdown-name').textContent()
  74 |     await expect(page.getByText(name)).toBeVisible();
  75 | 
  76 | 
  77 |     await page.waitForTimeout(4000)
  78 | 
  79 | 
  80 | 
  81 | })
  82 | 
  83 | 
  84 | 
  85 | 
  86 | 
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
  92 | 
  93 | 
  94 | 
  95 | 
  96 | 
  97 | 
  98 | 
  99 | 
```