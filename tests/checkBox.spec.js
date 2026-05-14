// const { test, expect } = require('@playwright/test')

// test('Handle CheckBox', async ({ page }) => {


//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//     // Single CheckBox

//     await page.locator('//input[@id="checkBoxOption1"]').check();
//     //await page.check('//input[@id="checkBoxOption1"]');

//     expect(await page.locator('#checkBoxOption1')).toBeChecked();
//     expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeTruthy();
//     await page.waitForTimeout(3000);

//     await page.locator('//input[@id="checkBoxOption1"]').uncheck();
//     await expect(page.locator('//input[@id="checkBoxOption1"]')).not.toBeChecked();

//     expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeFalsy();

//     await page.waitForTimeout(2000);

//     //  Multiple CheckBox

//     const checkBoxLoc = [
//         '//input[@id="checkBoxOption1"]',
//         '//input[@id="checkBoxOption2"]',
//         '//input[@id="checkBoxOption3"]'
//     ];

//     for (const locator of checkBoxLoc)  // select multiple checkbox
//          {
//         await page.locator(locator).check();
//     }

//     await page.waitForTimeout(2000);


//     for (const locator of checkBoxLoc) // unselect multiple checkboxes which are already selected
//         {
//         if (await page.locator(locator).isChecked()) {
//             await page.locator(locator).uncheck();
//         } 
//     }

//     await page.waitForTimeout(2000);
// });



import {test, expect} from '@playwright/test'
test('CheckBox', async({page})=>{
    
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //single checkBox
    await page.locator('#checkBoxOption1').check();
    //await page.check('#checkBoxOption1');

    expect(await page.locator('#checkBoxOption1')).toBeChecked()
    expect(await page.locator('#checkBoxOption1').isChecked()).toBeTruthy();

    // Uncheck the checkBox

    await page.locator('#checkBoxOption1').uncheck();
    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()

    await expect(await page.locator('#checkBoxOption1').isChecked()).toBeFalsy();

    const CheckboxLocators = [
        '#checkBoxOption1',
        '#checkBoxOption2',
        '#checkBoxOption3'
    ]

    for (const result of CheckboxLocators){
        await page.locator(result).check();
    }
    for (const result of CheckboxLocators){
        if (await page.locator(result).isChecked()){
            await page.locator(result).uncheck();
        }
    }


    await page.waitForTimeout(4000);
})























