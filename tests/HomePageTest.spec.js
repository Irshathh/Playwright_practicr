// import{test , expect} from '@playwright/test'

// test('Home page',async({page})=>{

//     await page.goto('https://demoblaze.com/');

//     const pageTitle = await page.title();
//     console.log(pageTitle);
//     await expect(page).toHaveTitle("STORE");

//     const pageURL = await page.url();
//     console.log(pageURL);
//     await expect(page).toHaveURL('https://demoblaze.com/');
    
// })



import{test, expect} from '@playwright/test'

test('Home page', async({page})=>{
    await page.goto('https://demoblaze.com/')

    const pageTitle=  await page.title();
    console.log("Page title is :", pageTitle)
    expect(page).toHaveTitle('STORE')

    const pageURL = await page.url();
    console.log(pageURL);
    expect(page).toHaveURL('https://demoblaze.com/')


})



































