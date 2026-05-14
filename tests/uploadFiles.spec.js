// const { test, expect } = require('@playwright/test');

// // test('Single File', async ({ page }) => {

// //     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

// //     await page.locator('#filesToUpload').click();
// //     await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/Syed Murtuza R.pdf');

// //     await page.waitForTimeout(5000);
// // });

// test.only('Multiple Files', async ({ page }) => {

//     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

//     await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Mohamed Irshad QA.pdf', 'tests/uploadFiles/Syed Murtuza R.pdf']);

//     await page.waitForTimeout(3000);

//     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Mohamed Irshad QA.pdf');
//     expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Syed Murtuza R.pdf');

//     await page.waitForTimeout(4000);

//     // Removing Files

//     await page.locator('#filesToUpload').setInputFiles([]);

//     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

//     await page.waitForTimeout(2000);


// })


import {test, expect} from '@playwright/test'
test('single file', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').click();
    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/Mohamed Irshad QA.pdf')
    await page.waitForTimeout(2000)

})


test.only('Multiple files',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');


    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Mohamed Irshad QA.pdf','tests/uploadFiles/Syed Murtuza R.pdf'])
    await page.waitForTimeout(3000)

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('Mohamed Irshad QA.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('Syed Murtuza R.pdf')

    await page.waitForTimeout(3000)

    // Removing files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(2000)
    
})













