import{test, expect} from '@playwright/test'
test('Assertion', async({page})=>{

    await page.goto('https://www.saucedemo.com/')

    //Page level assertion
    // Verify page title
    await expect(page).toHaveTitle('Swag Labs')

    // Verify page URL
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    // ELement state assertion
    // Locate username and password
    const UsernameInput  = await page.locator('#user-name');
    const PasswordInput = await page.locator('#password');
    const LoginButon =  await page.locator('#login-button')
    const errorMessage = await page.locator('[data-test="error"]')


    //Verify input field username and password are visible

    await expect(UsernameInput).toBeVisible;
    await expect(PasswordInput).toBeVisible();

    // Verify if web elements are enable and editable

    await expect(UsernameInput).toBeEnabled();
    await expect(PasswordInput).toBeEnabled();

    await expect(UsernameInput).toBeEditable();
    await expect(PasswordInput).toBeEditable();

    // Text & Value assertion
    await UsernameInput.fill('standard_user');
    await expect(UsernameInput).toHaveValue('standard_user');

    await PasswordInput.fill('secret_sauce');
    await expect(PasswordInput).toHaveValue('secret_sauce')


    //verify error message to be hidden before login attempt
    await expect(errorMessage).toBeHidden();
    await LoginButon.click();

    //page and text assertion after login
    // verify user navigated to investory page

    await expect(page).toHaveURL(/inventory/);

    // Verify products page heading
    const ProductTitle = page.locator('.title');

    await expect(ProductTitle).toBeVisible()
    await expect(ProductTitle).toHaveText('Products');
    
    // toContainsText
    await expect(ProductTitle).toContainText('Prod');

    // Count assertion
    // Verify total no of products

    const productItems = await page.locator('.inventory_item_name ');
    await expect(productItems).toHaveCount(6);

    await page.waitForTimeout(5000)







 })