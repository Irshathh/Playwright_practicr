# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> POM
- Location: tests\pom.spec.js:46:1

# Error details

```
TypeError: dialog.message(...).include is not a function
```

# Test source

```ts
  1  | // exports.HomePage = 
  2  | // class HomePage {
  3  | //     constructor(page) {
  4  | //         this.page = page;
  5  | //         this.productList = '//div[@id="tbodyid"]//div//h4//a';
  6  | //         this.addToCartBtn = '//a[text()="Add to cart"]';
  7  | //         this.cart = '#cartur';
  8  | //     };
  9  | 
  10 | //     async addProducts(productName) {
  11 | //         const productLists = await this.page.$$(this.productList);
  12 | //         for(const product of productLists) {
  13 | //             if(productName === await product.textContent()) {
  14 | //                 await product.click();
  15 | //                 break;
  16 | //             }
  17 | //         }
  18 | //         await this.page.on('dialog' , async dialog => {
  19 | //             if(dialog.message().includes('Product added.')) {
  20 | //                 await dialog.accept();
  21 | //             }
  22 | //         });
  23 | 
  24 | //         await this.page.locator(this.addToCartBtn).click();
  25 | //     };
  26 | 
  27 | //     async goToCart() {
  28 | //         await this.page.locator(this.cart).click();
  29 | //     }
  30 | // }
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 | exports.HomePage =
  37 | 
  38 | class HomePage{
  39 |     constructor(page){
  40 |         this.page = page;
  41 |         this.productList = '//div[@id="tbodyid"]//div//h4//a'
  42 |         this.addToCartBtn = '//a[text()="Add to cart"]'
  43 |         this.cart = '#cartur';
  44 |     };
  45 | 
  46 |     async addProducts(ProductName){
  47 |         const ProductLists = await this.page.$$(this.productList)
  48 |         for (const product of ProductLists){
  49 |             if (ProductName === await product.textContent() ){
  50 |                 await product.click()
  51 |                 break;
  52 |             }
  53 |         }
  54 | 
  55 | 
  56 |         await this.page.on('dialog',async dialog=>{
> 57 |             if(dialog.message().include('Product added')){
     |                                 ^ TypeError: dialog.message(...).include is not a function
  58 |                 await dialog.accept()
  59 | 
  60 |             }
  61 |         });
  62 | 
  63 |         await this.page.locator(this.addToCartBtn).click()
  64 | 
  65 |     };
  66 | 
  67 |     async goToCart(){
  68 |         await this.page.locator(this.cart).click()
  69 |     }
  70 | }
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
  80 | 
  81 | 
```