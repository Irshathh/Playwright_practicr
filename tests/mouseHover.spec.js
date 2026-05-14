// const { test, expect } = require('@playwright/test');

// test('Mouse Hover', async ({ page }) => {

//     await page.goto('https://www.amazon.in/');

//     const hello = await page.locator('//span[text()="Hello, sign in"]');
//     const account = await page.locator('//span[text()="Your Account"]');

//     // Mouse Hover

//     await hello.hover();
//         await page.waitForTimeout(5000);

//     await account.hover();
//     // /await account.click();

//     await page.waitForTimeout(5000);

// });



const { test, expect } = require('@playwright/test');

 test('Mouse Hover', async ({ page }) => {

     await page.goto('https://www.amazon.in/');

     const hello = await page.locator('#nav-link-accountList-nav-line-1');
     const account = await page.locator('//span[text()="Your Account"]')

     //Mouse Hover

     await hello.hover()
    //  await account.hover()
         await account.click()

     await page.waitForTimeout(5000);

 })









