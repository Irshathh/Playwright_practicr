// const { test, expect } = require('@playwright/test')

// test('Dropdown', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown

    //await page.selectOption("#colors" ,['Blue','Red','Yellow'])

    // Assertion
    // check no of options in dropdown
    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(7)

    // check no of options in dropdown using JS Array

    //const options = await page.$$('#colors option');
    //console.log(options.length)
    //await expect(options.length).toBe(7)


    //Check Presence of value in dropdown

    // const content = await page.locator('#colors').textContent();
    // await expect(content.includes('Blue')).toBeTruthy();

    // await page.waitForTimeout(2000)





// })



 const { test, expect } = require('@playwright/test')

 test('Dropdown', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     // Select Multiple options from multi selector dropdown

     //await page.selectOption('#colors',['Blue','Red','Yellow']);

     //Assertion
     // Check no of options in dropdown
    //  const option =  await page.locator('#colors option')
    //  await expect(option).toHaveCount(7)

    // Method 2
    // const option = await page.$$('#colors option')
    // console.log(option.length)
    // await expect(option.length).toBe(7)

    // Check the presence of value in dropdown

    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy()


     await page.waitForTimeout(3000)

 })


























