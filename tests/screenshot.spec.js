

import {test, expect} from '@playwright/test'
test('page screenshot', async({page})=>{

    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(4000);


   // await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'Homepage.png'})
   await page.screenshot({path : 'tests/screenshot/'+ Date.now() + 'Homepage.png' })
})

test('Full page screenshot',async({page})=>{
    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(5000)
    
    await page.screenshot({path: 'tests/screenshot' + 'Fullpage.png', fullPage: true})
    
})

test.only('Element screenshot', async({page})=>{
    await page.goto('https://www.amazon.in/HOKIPO-Portable-Dustbin-Countertop-Desktop/dp/B0G5FDFV35/?_encoding=UTF8&pd_rd_w=Gc2qa&content-id=amzn1.sym.263478fa-03d8-4a98-887c-61621826f852&pf_rd_p=263478fa-03d8-4a98-887c-61621826f852&pf_rd_r=MJBBAWA6BFP23VSA6VNF&pd_rd_wg=Q1Yrv&pd_rd_r=280c7f29-4b9f-4a5e-a1b6-31bccca60807&ref_=pd_hp_d_atf_dealz_cs&th=1')



    await page.waitForTimeout(5000)
    await page.locator('span#productTitle').screenshot({path:'tests/screenshot' + "kitchen.png"})

    
})





















