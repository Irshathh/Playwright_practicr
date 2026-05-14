
const {test, expect} =require('@playwright/test')
const {LoginPage} = require ('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const{ CartPage} = require('../pages/CartPage')

test('POM', async({page})=>{

    //Login page

    const login = new LoginPage(page);
    await login.goToUrl();
    await login.login('irshath','test"23')
    await page.waitForTimeout(3000)

    // Home Page
    
    const home = new HomePage(page);
    await home.addProducts('Sony xperia z5');
    await page.waitForTimeout(2000);
    await home.goToCart();

    // Cart Page
    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    const status = await cart.checkProduct('Sony xperia z5');
    await expect(status).toBe(true);

})





