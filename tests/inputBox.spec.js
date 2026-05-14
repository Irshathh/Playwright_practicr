// const { test, expect } = require('@playwright/test')

// test('Handle Inputbox', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     await expect(page.locator('#name')).toBeVisible();
//     await expect(page.locator('//input[@id="name"]')).toBeEditable();
//     await expect(page.locator('//input[@id="name"]')).toBeEnabled();
//     await expect(page.locator('//input[@id="name"]')).toBeEmpty();

//     await page.locator('//input[@id="name"]').fill("Good Afternoon");
//     //page.fill("//input[@id='name']",'irshad');

//     await page.waitForTimeout(2000);



const {test, expect} =  require('@playwright/test')

test('Input', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');


    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('//input[@id="name"]')).toBeEditable();
    await expect(page.locator('//input[@id="name"]')).toBeEnabled();
    await expect(page.locator('//input[@id="name"]')).toBeEmpty();


    //await page.locator('//input[@id="name"]').fill("Mohamed Irshad");
    await page.type('//input[@id="name"]',"Mohamed Irshad");

    await page.waitForTimeout(3000);

})




















// });