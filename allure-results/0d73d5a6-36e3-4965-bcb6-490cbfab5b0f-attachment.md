# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> POM
- Location: tests\pom.spec.js:7:1

# Error details

```
TypeError: LoginPage is not a constructor
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/LoginPage');
  3  | const { HomePage } = require('../pages/HomePage');
  4  | const { CartPage } = require('../pages/CartPage');
  5  | // const { PlaceOrderPage } = require('../pages/PlaceOrderPage');
  6  | 
  7  | test('POM', async ({ page }) => {
  8  | 
  9  |     // Login Page
  10 | 
> 11 |     const login = new LoginPage(page);
     |                   ^ TypeError: LoginPage is not a constructor
  12 |     await login.gotoUrl();
  13 |     await login.login('pavanol', 'test@123');
  14 |     await page.waitForTimeout(3000);
  15 | 
  16 |     // Home Page
  17 | 
  18 |     const home = new HomePage(page);
  19 |     await home.addProducts('Sony xperia z5');
  20 |     await page.waitForTimeout(2000);
  21 |     await home.goToCart();
  22 | 
  23 |     // Cart Page
  24 | 
  25 |     const cart = new CartPage(page);
  26 |     await page.waitForTimeout(2000);
  27 |     const status = await cart.checkProduct('Sony xperia z5');
  28 |     await expect(status).toBe(true);
  29 |     
  30 |     // Place Order Page
  31 |     // const placeOrder = new PlaceOrderPage(page);
  32 |     // await page.waitForTimeout(2000);
  33 |     // await placeOrder.placeOrder('Riyaz', 'India', 'Chennai', '8537815', '9', '2027');
  34 |     // const orderStatus = await placeOrder.verifyOrderPlaced();
  35 |     // await expect(orderStatus).toBe(true);
  36 | });
```