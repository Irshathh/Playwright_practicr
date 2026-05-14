// 


// const { test, expect } = require("@playwright/test")

// test('Auto Suggest Dropdown', async ({ page }) => {

//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//     await page.locator('input#autocomplete').fill('ar');

//     await page.waitForSelector('//li[@class="ui-menu-item"]//div');

//     const CountryOption = await page.$$('//li[@class="ui-menu-item"]//div');

//     for (let option of CountryOption){

//         const value = await option.textContent();
//         console.log(value);
//         if(value.includes('Qatar')){
//             await option.click();
//             break;
//         }



//     }

//    await page.waitForTimeout(5000);
// })



import {test ,expect} from '@playwright/test';
test('Auto suggest', async({page})=>{

   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

   await page.locator('input#autocomplete').fill('ar');

   await page.waitForSelector('//li[@class="ui-menu-item"]//div')

   const CountryOptions = await page.$$('//li[@class="ui-menu-item"]//div');

   for (let option of CountryOptions){
    const value = await option.textContent() 
    console.log(value)
    if(value.includes('Myanmar')){
             await option.click();
             break;
         }
   }

  
   await page.waitForTimeout(5000);
})




















