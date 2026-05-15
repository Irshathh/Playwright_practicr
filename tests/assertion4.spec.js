import {test, expect} from '@playwright/test'
test('Assertion,', async({page})=>{
    await page.goto('https://www.saucedemo.com/')

    // Verify page title

    await expect(page).toHaveTitle('Swag Labs');

    // Verify page URL

    await expect(page).toHaveURL('https://www.saucedemo.com/')


    //Elements state assertion
    // Locate username and password

    const usernameInput = await page.locator('#user-name');
    const passwordInput = await page.locator('#password');
    const loginButton = await page.locator('#login-button');
    const errorMessage = await page.locator('[data-test="error"]')


    //verify input field username and password are visible

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // verify if web elements are enabled and editable

    await expect(usernameInput).toBeEnabled();
    await expect(passwordInput).toBeEnabled();
    await expect(loginButton).toBeEnabled()

    await expect(usernameInput).toBeEditable();
    await expect(passwordInput).toBeEditable();



    // Text & Value assertions

    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user')

    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).toHaveValue('secret_sauce')

    // verify error message

    await expect(errorMessage).toBeHidden();


    await loginButton.click()

    // page and text assertion after login
    //verify user navigated to inventory page

    await expect(page).toHaveURL(/inventory/);

    //verify product page heading
    const productTitle = await page.locator('.title')

    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText('Products')

    // ToContainsText
     await expect(productTitle).toContainText('Prod')


     // Count assertion
     //verify total no of products
     
     const productItems = await page.locator('.inventory_item_name ')
     await expect(productItems).toHaveCount(6)



     await page.waitForTimeout(3000)








})