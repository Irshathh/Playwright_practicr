const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    
    //1. page level assertions

    //verify page title
    await expect(page).toHaveTitle('Swag Labs')

    //verify page url
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //2. Element state assertion
    // locate username and password

    const usernameInput = await page.locator('#user-name');
    const passwordInput = await page.locator('#password');
    const loginButton =   await page.locator('#login-button');
    const errroMessage = await page.locator('[data-test="error"]')

    //verify input field username and password are visible
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    //verify if webelements are enabled and editable

    await expect(usernameInput).toBeEnabled();
    await expect(passwordInput).toBeEnabled();
    await expect(loginButton).toBeEnabled();

    await expect(usernameInput).toBeEditable();
    await expect(passwordInput).toBeEditable();

    //Attribute assertion



    //3. Text & value assertions

    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user');

    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).toHaveValue('secret_sauce');

    // verify error message to be hidden before login attempt
    await expect(errroMessage).toBeHidden();

    await loginButton.click()

    //page and text assertion after login
    // verify user navigated to investory page

    await expect(page).toHaveURL(/inventory/);

    //verify products page heading
    const productTitle = page.locator('.title');
   
    await expect(productTitle).toBeVisible()
    await expect(productTitle).toHaveText('Products')

    await expect(productTitle).toContainText('Prod')
    

    // Count assertion
    //verify total no of products

    const productItems = page.locator('.inventory_item_name ')
    await expect(productItems).toHaveCount(6)

})
