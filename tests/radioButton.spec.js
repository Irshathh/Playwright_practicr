// const { test, expect } = require('@playwright/test')

// test('Handle Radio Button', async ({ page }) => {

//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//     // Radio Button

//     await page.locator('[value="radio3"]').check();
//     //await page.check('[value="radio3"]');

//     await expect(page.locator('[value="radio3"]')).toBeChecked();
//     await expect(page.locator('[value="radio3"]').isChecked()).toBeTruthy();
//     await expect(await page.locator('[value="radio2"]').isChecked()).toBeFalsy();

//     await page.waitForTimeout(3000);
// });


import {test, expect} from '@playwright/test';
test('Radio Button', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await (page.locator('[value="radio1"]')).check()
    //await page.check('[value="radio1]');

    await expect(page.locator('[value="radio1"]')).toBeChecked();
    await expect(await page.locator('[value="radio1"]').isChecked()).toBeTruthy();


   // checking the unchecked radio button
  // await expect(await page.locator('[value="radio2"]').isChecked()).toBeFalsy();
    

    await page.waitForTimeout(5000);


})






























