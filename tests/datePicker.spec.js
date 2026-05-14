// const { test, expect } = require('@playwright/test')

// test('Date Pickers', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // await page.locator('input#datepicker').fill("01/25/2026");
//     // Ella date picker-um allow pannaadhu - so automation approach better

//     // Date Picker

//     const year = "2027";
//     const month = "May";
//     const date = "17"

//     await page.click('input#datepicker'); // open the calender
//   //for -loop  (loop count) namakku theriyadhu ❌
//   // while- "Condition satisfy aagum varaikum run pannunga"
//     while (true) {
//         const currentYear = await page.locator('.ui-datepicker-year').textContent();
//         const currrentMonth = await page.locator('.ui-datepicker-month').textContent();

//         if (currentYear == year && currrentMonth == month) {
//             break;
//         }

//         await page.locator('[title="Next"]').click(); // Next
//         //await page.locator('[title="Prev"]').click(); // Past
//     }

//     const dates = await page.$$('//a[@class="ui-state-default"]');

//     // Date Selection using Loop

//     // for(const dt of daates) {
//     //     if(await dt.textContent() == date) {
//     //         await dt.click();
//     //         break;
//     //     }
//     // }


//     // Date Selection - without loop
 
//     //await page.locator('//a[@class="ui-state-default"][text()="21"]').click();

//     await page.locator(`//a[@class="ui-state-default"][text()='${date}']`).click();

//     await page.waitForTimeout(2000);
// });

import{test, expect} from '@playwright/test'
test('Date pickers', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('input#datepicker').fill("05/09/2026");
    
    //Date Picker

    const year = "2024";
    const month = "May";
    const date = "17";

    await page.click('input#datepicker'); // Open the calendar

    while (true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if( currentYear == year && currentMonth == month){
            break;
        }
        //await page.locator('[title="Next"]').click() //Next
        await page.locator('[title="Prev"]').click() // Prev
    }

    const dates = await page.$$('//a[@class ="ui-state-default"]')

    // Date selection using loop

    // for (const dt of dates){
    //     if (await dt.textContent()== date){
    //         await dt.click();
    //         break;
    //     }
    // }



    // Date selection - without Loop

    await page.locator(`//a[@class ="ui-state-default"][text()= ${date}]`)
    
    
    
    
    await page.waitForTimeout(5000)

})












