// const { test, expect } = require('@playwright/test');

// ONLY 

// test.only('Test 1', async ({ page }) => {
//     console.log("This is Test 1");

// });

// SKIP

// test.skip('Test 2', async ({ page }) => {
//     console.log("This is Test 2");

// });

// test('Test 3', async ({ page, browserName }) => {
//     console.log("This is Test 3");
//     if (browserName === 'firefox') {
//         test.skip();
//     }

// });

// FIX ME

// test('Test 4', async ({ page }) => {
//     test.fixme()
//     console.log("This is Test 4");
// });


// FAIL

// test('Test 5', async ({ page }) => {
//     test.fail(); // expected
//     console.log("This is Test 5");
//     expect(1).toBe(1);  // actual 
//     //expect(1).toBe(0);
// });

// test('Test 6', async ({ page, browserName }) => {
//     console.log("This is Test 6");
//     if (browserName === 'chromium') {
//         test.fail(); //expected
//     }
// });

// SLOW

// test('Test 7', async ({ page }) => {
     
//     await page.goto('https://playwright.dev/docs/test-annotations#focus-a-test');
//     console.log("This is Test 7");
// });

// test('Add products to cart', async({page})=>{
//     test.slow()


//     await page.goto('https://demoblaze.com/index.html')

//     //login page
//       await page.locator('#login2').click()
//     await page.locator('#loginusername').fill('irshath')
//     await page.locator('#loginpassword').fill('test"23')
//     await page.click('//button[text()="Log in"]');
// })

// import {test,expect} from '@playwright/test'

//ONLY
// test.only('Test1',async({page})=>{
//   console.log("This is test 1")
// });

// SKIP
// test.skip('Test2',async({page})=>{
//   console.log("This is test 2")
// });

// test('test3',async({page, browserName})=>{
//   console.log('This is test3')
//   if (browserName === 'chromium'){
//     test.skip();
//   }
// })

//FIX ME

// test('test4',async({page})=>{
//   test.fixme()
//   console.log('This is test 4')
// })


//FAIl

// test('test5', async({page})=>{
//   test.fail()
//   console.log('This is test 5');
//   expect(1).toBe(1)
// })


// SLOW

// test('test6',async({page})=>{

//   test.slow()
//    await page.goto('https://demoblaze.com/index.html')

//     await page.locator('#login2').click()
//     await page.locator('#loginusername').fill('irshath')
//     await page.locator('#loginpassword').fill('test"23')
//     await page.click('//button[text()="Log in"]');
// })

import {test, expect} from '@playwright/test'

//ONLY

// test.only('Test 1', async({page})=>{
//   console.log('This is test 1')
// })

// SKIP

// test.skip('Test 2', async({page})=>{
//   console.log('this is test 2')
// })

// test('Test 3', async({page, browserName})=>{
//   console.log('this is test 2');
//   if (browserName === 'chromium'){
//     test.skip();
//   }


// })

// FIX ME

//  test('Test 4 ', async({page})=>{
//   test.fixme()
//    console.log('this is test 4')
//  })

// FAIl

// test('Test 5', async({page})=>{
//   test.fail()
//    console.log('this is test 5');
//    expect(1).toBe(0)
//  });


// SLOW

test('Add products to cart', async({page})=>{
  test.slow()

   await page.goto('https://demoblaze.com/index.html')


   await page.locator('#login2').click()
    await page.locator('#loginusername').fill('irshath')
    await page.locator('#loginpassword').fill('test"23')
    await page.click('//button[text()="Log in"]')
})














