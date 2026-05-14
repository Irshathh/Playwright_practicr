# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: retry.spec.js >> POM
- Location: tests\retry.spec.js:7:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome irshath" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Sony xperia z5 320 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Sony xperia z5" [ref=e37]
            - cell "320" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "Sony xperia z5 320 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "Sony xperia z5" [ref=e44]
            - cell "320" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [ref=e47] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e48]:
      - heading "Total" [level=2] [ref=e49]
      - heading "640" [level=3] [ref=e52]
      - button "Place Order" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e58]:
      - heading "About Us" [level=4] [ref=e59]
      - paragraph [ref=e60]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e63]:
      - heading "Get in Touch" [level=4] [ref=e64]
      - paragraph [ref=e65]: "Address: 2390 El Camino Real"
      - paragraph [ref=e66]: "Phone: +440 123456"
      - paragraph [ref=e67]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e71]:
      - img [ref=e72]
      - text: PRODUCT STORE
  - contentinfo [ref=e73]:
    - paragraph [ref=e74]: Copyright © Product Store
```

# Test source

```ts
  1  | 
  2  | const {test, expect} =require('@playwright/test')
  3  | const {LoginPage} = require ('../pages/LoginPage');
  4  | const { HomePage } = require('../pages/HomePage');
  5  | const{ CartPage} = require('../pages/cartPage')
  6  | 
  7  | test('POM', async({page})=>{
  8  | 
  9  |     //Login page
  10 | 
  11 |     const login = new LoginPage(page);
  12 |     await login.goToUrl();
  13 |     await login.login('irshath','test"23')
  14 |     await page.waitForTimeout(3000)
  15 | 
  16 |     // Home Page
  17 |     
  18 |     const home = new HomePage(page);
  19 |     await home.addProducts('Sony xperia z5');
  20 |     await page.waitForTimeout(2000);
  21 |     await home.goToCart();
  22 | 
  23 |     // Cart Page
  24 |     const cart = new CartPage(page);
  25 |     await page.waitForTimeout(2000);
  26 |     const status = await cart.checkProduct('Sony xperia z5');
> 27 |     await expect(status).toBe(false);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  28 | 
  29 | })
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
```