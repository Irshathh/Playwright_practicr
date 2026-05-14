# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> Element Screenshot
- Location: tests\screenshot.spec.js:20:6

# Error details

```
Error: locator.screenshot: Error: strict mode violation: locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]') resolved to 16 elements:
    1) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'ACs' })
    2) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Refrigerators' })
    3) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Microwaves' })
    4) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Washing machines' })
    5) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Cushion covers, bedsheets &' })
    6) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Figurines, vases & more' })
    7) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Home storage' })
    8) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Lighting solutions' })
    9) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Cleaning' })
    10) <div class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr">…</div> aka getByRole('link', { name: 'Bath accessories' })
    ...

Call log:
  - waiting for locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=e8]
  - banner [ref=e9]:
    - navigation "Primary" [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - link "Amazon.in" [ref=e14] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Chennai 600041 Update location" [ref=e17] [cursor=pointer]:
            - generic [ref=e19]:
              - generic [ref=e20]: Delivering to Chennai 600041
              - generic [ref=e21]: Update location
        - search [ref=e24]:
          - generic [ref=e27]:
            - generic [ref=e29]: All
            - combobox "Select the department you want to search in" [ref=e31] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e34]
          - generic "Go" [ref=e37] [cursor=pointer]:
            - button "Go" [ref=e38]
        - generic [ref=e40]:
          - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e42] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
            - generic [ref=e45]:
              - img "India" [ref=e46]
              - generic [ref=e47]: EN
          - link "Hello, sign in Account & Lists" [ref=e49] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
            - generic [ref=e51]: Hello, sign in
            - generic [ref=e52]: Account & Lists
          - link "Returns & Orders" [ref=e53] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e54]: Returns
            - generic [ref=e55]: "& Orders"
          - link "0 items in cart" [ref=e56] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e58]: "0"
            - generic [ref=e61]: Cart
      - generic [ref=e62]:
        - button "Open All Categories Menu" [ref=e64] [cursor=pointer]:
          - generic [ref=e66]: All
        - list [ref=e70]:
          - listitem [ref=e71]:
            - link "Fresh" [ref=e73] [cursor=pointer]:
              - /url: /fresh?ref_=nav_cs_fresh
          - listitem [ref=e74]:
            - link "MX Player" [ref=e76] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e77]:
            - link "Sell" [ref=e79] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e80]:
            - link "Bestsellers" [ref=e82] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e83]:
            - link "Mobiles" [ref=e85] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e86]:
            - link "Today's Deals" [ref=e88] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e89]:
            - link "Customer Service" [ref=e91] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e92]:
            - link "New Releases" [ref=e94] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e95]:
            - link "Prime" [ref=e97] [cursor=pointer]:
              - /url: /prime?ref_=nav_cs_primelink_nonmember
          - listitem [ref=e98]:
            - link "Amazon Pay" [ref=e100] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e101]:
            - link "Electronics" [ref=e103] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e104]:
            - link "Fashion" [ref=e106] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e107]:
            - link "Home & Kitchen" [ref=e109] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e110]:
            - link "Computers" [ref=e112] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e113]:
            - link "Books" [ref=e115] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e116]:
            - link "Toys & Games" [ref=e118] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e119]:
            - link "Gift Cards" [ref=e121] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e122]:
            - link "Beauty & Personal Care" [ref=e124] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e125]:
            - link "Car & Motorbike" [ref=e127] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e128]:
            - link "Home Improvement" [ref=e130] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e131]:
            - link "Custom Products" [ref=e133] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e134]:
            - link "Sports, Fitness & Outdoors" [ref=e136] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e137]:
            - link "Health, Household & Personal Care" [ref=e139] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e140]:
            - link "Grocery & Gourmet Foods" [ref=e142] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e143]:
            - link "Pet Supplies" [ref=e145] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e146]:
            - link "Baby" [ref=e148] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e149]:
            - link "Video Games" [ref=e151] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e152]:
            - link "AmazonBasics" [ref=e154] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e155]:
            - link "Audible" [ref=e157] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e158]:
            - link "Subscribe & Save" [ref=e160] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e161]:
            - link "Kindle eBooks" [ref=e163] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e164]:
            - link "Flights" [ref=e166] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
        - link "Jan26_Event" [ref=e170] [cursor=pointer]:
          - /url: /events/greatsummersale/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=5b0cae96-094f-4960-87ea-c493b25457f0&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=XWYEND6XP9F091MBYVVZ
          - img "Jan26_Event" [ref=e171]
  - main [ref=e173]:
    - banner [ref=e175]:
      - region "Featured content" [ref=e176]:
        - list [ref=e181]:
          - listitem [ref=e182]:
            - link "Everyday needs" [ref=e185] [cursor=pointer]:
              - /url: /fmc/everyday-essentials-category/?_encoding=UTF8&_encoding=UTF8&node=4859481031&ref_=eemb_p_d_2454178031_ai_4859481031_4_sm&pd_rd_w=ZtqH3&content-id=amzn1.sym.27d77eca-97c4-4e19-b68a-db14566ab19f&pf_rd_p=27d77eca-97c4-4e19-b68a-db14566ab19f&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=YKRmD&pd_rd_r=787cb892-92d9-478c-a98c-fdeb81c04a2a
              - img "Everyday needs"
    - generic [ref=e186]:
      - generic [ref=e187]:
        - generic [ref=e189]:
          - heading "Appliances for your home | Up to 55% off" [level=2] [ref=e191]
          - generic [ref=e192]:
            - generic [ref=e193]:
              - link "ACs" [ref=e195] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&pd_rd_w=Z2vuX&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e196]:
                  - img "ACs"
                - generic [ref=e198]: Air conditioners
              - link "Refrigerators" [ref=e200] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=81107433031&rh=n%3A81107433031%2Cp_85%3A10440599031&pd_rd_w=Z2vuX&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e201]:
                  - img "Refrigerators"
                - generic [ref=e203]: Refrigerators
            - generic [ref=e204]:
              - link "Microwaves" [ref=e206] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=84514739031&rh=n%3A84514739031%2Cp_85%3A10440599031&pd_rd_w=Z2vuX&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e207]:
                  - img "Microwaves"
                - generic [ref=e209]: Microwaves
              - link "Washing machines" [ref=e211] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&bbn=84514752031&rh=n%3A84514752031%2Cp_85%3A10440599031&pd_rd_w=Z2vuX&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e212]:
                  - img "Washing machines"
                - generic [ref=e214]: Washing machines
          - link "Appliances for your home | Up to 55% off - See more" [ref=e216] [cursor=pointer]:
            - /url: /s/?_encoding=UTF8&bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&pd_rd_w=Z2vuX&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
            - generic [ref=e218]: See more
        - generic [ref=e220]:
          - heading "Revamp your home in style" [level=2] [ref=e222]
          - generic [ref=e223]:
            - generic [ref=e224]:
              - link "Cushion covers, bedsheets & more" [ref=e226] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&node=1380442031&pd_rd_w=iLK3u&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e227]:
                  - img "Cushion covers, bedsheets & more"
                - generic [ref=e229]: Cushion covers, bedsheets & more
              - link "Figurines, vases & more" [ref=e231] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&node=1380374031&pd_rd_w=iLK3u&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e232]:
                  - img "Figurines, vases & more"
                - generic [ref=e234]: Figurines, vases & more
            - generic [ref=e235]:
              - link "Home storage" [ref=e237] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&node=1380510031&pd_rd_w=iLK3u&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e238]:
                  - img "Home storage"
                - generic [ref=e240]: Home storage
              - link "Lighting solutions" [ref=e242] [cursor=pointer]:
                - /url: /b/?_encoding=UTF8&node=1380485031&pd_rd_w=iLK3u&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e243]:
                  - img "Lighting solutions"
                - generic [ref=e245]: Lighting solutions
          - link "Revamp your home in style - Explore all" [ref=e247] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=12414705031&pd_rd_w=iLK3u&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
            - generic [ref=e249]: Explore all
        - generic [ref=e251]:
          - heading "Starting ₹49 | Deals on home essentials" [level=2] [ref=e253]
          - generic [ref=e254]:
            - generic [ref=e255]:
              - link "Cleaning" [ref=e257] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&bbn=61028133031&rh=n%3A61028133031%2Cp_72%3A1318476031%2Cp_36%3A-19900&_encoding=UTF8&qid=1714749719&rnid=3444809031&ref=sr_nr_p_36_3&pd_rd_w=hj72A&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e258]:
                  - img "Cleaning"
                - generic [ref=e260]: Cleaning supplies
              - link "Bath accessories" [ref=e262] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A60834830031%2Cp_36%3A-39900%2Cp_72%3A1318476031&dc=&fs=true&qid=1714744556&rnid=1318475031&ref=sr_nr_p_72_1&ds=v1%3AObcyf9vB3S72PU7NAfGZ%2FbllKjFxF%2BIh8NlJQg5c1A8%22&pd_rd_w=hj72A&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e263]:
                  - img "Bath accessories"
                - generic [ref=e265]: Bathroom accessories
            - generic [ref=e266]:
              - link "Home tools" [ref=e268] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A95174669031%2Cp_36%3A3444810031%2Cp_72%3A1318476031&pd_rd_w=hj72A&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e269]:
                  - img "Home tools"
                - generic [ref=e271]: Home tools
              - link "Wallpapers" [ref=e273] [cursor=pointer]:
                - /url: /s/?_encoding=UTF8&i=home-improvement&rh=n%3A87322479031%2Cp_36%3A-29900%2Cp_72%3A1318476031&dc=&fs=true&qid=1714750891&rnid=1318475031&ref=sr_nr_p_72_1&ds=v1%3AKT2aFWvve4xsaDjrU17ctKHJFfdbS%2FW1Ex2L5A6belw&pd_rd_w=hj72A&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e274]:
                  - img "Wallpapers"
                - generic [ref=e276]: Wallpapers
          - link "Starting ₹49 | Deals on home essentials - Explore all" [ref=e278] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=4286640031&pd_rd_w=hj72A&content-id=amzn1.sym.2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_p=2eab8373-f2e6-4b01-97aa-c5592db6ec60&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
            - generic [ref=e280]: Explore all
        - generic [ref=e282]:
          - heading "Bulk order discounts + Up to 18% GST savings" [level=2] [ref=e284]
          - generic [ref=e285]:
            - generic [ref=e286]:
              - link "Up to 45% off | Laptops" [ref=e288] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y5vqf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e289]:
                  - img "Up to 45% off | Laptops"
                - generic [ref=e291]: Up to 45% off | Laptops
              - link "Up to 60% off | Kitchen appliances" [ref=e293] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y5vqf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e294]:
                  - img "Up to 60% off | Kitchen appliances"
                - generic [ref=e296]: Up to 60% off | Kitchen appliances
            - generic [ref=e297]:
              - link "Min. 50% off | Office furniture" [ref=e299] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y5vqf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e300]:
                  - img "Min. 50% off | Office furniture"
                - generic [ref=e302]: Min. 50% off | Office furniture
              - link "For Business Purchases" [ref=e304] [cursor=pointer]:
                - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y5vqf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
                - generic [ref=e305]:
                  - img "For Business Purchases"
                - generic [ref=e307]: Register using GST, Udyam, FSSAI or BPAN
          - link "Bulk order discounts + Up to 18% GST savings - Create a free account" [ref=e309] [cursor=pointer]:
            - /url: /b/ref=vpr_b2c_pqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=Y5vqf&content-id=amzn1.sym.73333962-bf52-455e-9970-7ac1801ca224&pf_rd_p=73333962-bf52-455e-9970-7ac1801ca224&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=mMIhk&pd_rd_r=5f082d8d-a5aa-4475-88f2-067073f8ed01&ref_=pd_hp_d_atf_unk
            - generic [ref=e311]: Create a free account
        - separator [ref=e312]
      - generic [ref=e314]:
        - generic [ref=e316]:
          - heading "Customers’ Most-Loved products" [level=2] [ref=e318]:
            - generic [ref=e320]: Customers’ Most-Loved products
          - generic [ref=e322]:
            - link "Wall1ders Golden Mirror Stickers - Acrylic Wall Decor, Large Size (45 cm), Self-Adhesive" [ref=e324] [cursor=pointer]:
              - /url: /Wall1ders-Acrylic-Mirror-Stickers-Office/dp/B071RV9WZ9/?_encoding=UTF8&pd_rd_w=Zw0eb&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Wall1ders Golden Mirror Stickers - Acrylic Wall Decor, Large Size (45 cm), Self-Adhesive" [ref=e326]
            - link "Nirmalaya Premium Organic Cow Dung Havan Cups | Pack of 15 with Holder | 100% Natural Organic Cups | Blend of Guggal, Lobaan & Natural Herbs | Ideal for Pooja, Meditation, Yoga and Aromatherapy" [ref=e328] [cursor=pointer]:
              - /url: /Nirmalaya-Organic-Sambrani-Pooja-Jatamassi/dp/B0BC1KVT3R/?_encoding=UTF8&pd_rd_w=Zw0eb&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Nirmalaya Premium Organic Cow Dung Havan Cups | Pack of 15 with Holder | 100% Natural Organic Cups | Blend of Guggal, Lobaan & Natural Herbs | Ideal for Pooja, Meditation, Yoga and Aromatherapy" [ref=e330]
            - link "Wall1ders Wall Border, Mirror Stickers for wall, Acrylic Mirror wall Decor Sticker, wall Mirror Stickers, Acrylic Stickers, Wall Stickers for Hall Room, Bed Room, Kitchen. (Gold)- Pack of 10" [ref=e332] [cursor=pointer]:
              - /url: /Wall1ders-Borders-Golden-Acrylic-Stickers/dp/B075PVBJ23/?_encoding=UTF8&pd_rd_w=Zw0eb&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Wall1ders Wall Border, Mirror Stickers for wall, Acrylic Mirror wall Decor Sticker, wall Mirror Stickers, Acrylic Stickers, Wall Stickers for Hall Room, Bed Room, Kitchen. (Gold)- Pack of 10" [ref=e334]
            - link "Saaikee Fruit Basket with Lid | Net Basket for Fruits & Vegetables | Fruits Basket with net Cover | Mesh Basket | Apple Shape Vegetables Fruit Basket for Kitchen (Blue)" [ref=e336] [cursor=pointer]:
              - /url: /Saaikee-Basket-Size28-5-Assorted-Kilogram/dp/B07ZRTPG16/?_encoding=UTF8&pd_rd_w=Zw0eb&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
              - img "Saaikee Fruit Basket with Lid | Net Basket for Fruits & Vegetables | Fruits Basket with net Cover | Mesh Basket | Apple Shape Vegetables Fruit Basket for Kitchen (Blue)" [ref=e338]
          - link "Customers’ Most-Loved products - Explore more" [ref=e340] [cursor=pointer]:
            - /url: /b/?_encoding=UTF8&node=30631803031&pd_rd_w=Zw0eb&content-id=amzn1.sym.7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_p=7f09719d-336e-4ab7-8e81-a2df620a37b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_a2i_ohl_gw_cml
            - generic [ref=e342]: Explore more
        - generic [ref=e344]:
          - heading "Up to 75% off | Curated products | Small Businesses" [level=2] [ref=e346]:
            - generic [ref=e348]: Up to 75% off | Curated products | Small Businesses
          - generic [ref=e350]:
            - link "SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office (Golden, Size:32x30inch)" [ref=e352] [cursor=pointer]:
              - /url: /Peacock-Decorations-Perfect-Sculpture-28x31inch/dp/B09NP8RHJC/?_encoding=UTF8&pd_rd_w=9YfLJ&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE1
              - img "SNS DECOR Metal Peacock Wall Art Decorations | Perfect 3D Wall Sculpture For Living Room, Bedroom, Drawing Room & Office (Golden, Size:32x30inch)" [ref=e354]
            - link "SNS Decor Metal Leaf (Set of 3) Copper Antique Finish Wall Art Decorations | Perfect 3D Wall Sculpture for Living Room, Bedroom, Restaurant, Hotel & Office" [ref=e356] [cursor=pointer]:
              - /url: /Decorations-Perfect-Sculpture-Bedroom-Drawing/dp/B09WTXF2MY/?_encoding=UTF8&pd_rd_w=9YfLJ&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE1
              - img "SNS Decor Metal Leaf (Set of 3) Copper Antique Finish Wall Art Decorations | Perfect 3D Wall Sculpture for Living Room, Bedroom, Restaurant, Hotel & Office" [ref=e358]
            - link "SNS DECOR Ginkgo Tree Leaf Metal Wall Art Decorations | Modern Luxury Metal Wall Nature Art Decor, | Perfect 3D Wall Sculpture For Living Room, Restaurant, Hotel & Office" [ref=e360] [cursor=pointer]:
              - /url: /SNS-DECOR-Decorations-Sculpture-Restaurant/dp/B0D3WLR9GP/?_encoding=UTF8&pd_rd_w=9YfLJ&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE1
              - img "SNS DECOR Ginkgo Tree Leaf Metal Wall Art Decorations | Modern Luxury Metal Wall Nature Art Decor, | Perfect 3D Wall Sculpture For Living Room, Restaurant, Hotel & Office" [ref=e362]
            - link "SNS DECOR Metal Sunset Serenity LED Wall Art | Abstract Sun Wall Decor | Modern Handcrafted Designer Sun Iron Wall Decor with LED | Perfect for Living Room, Drawing Room, Restaurant (Copper Antique)" [ref=e364] [cursor=pointer]:
              - /url: /SNS-DECOR-Serenity-Handcrafted-Restaurant/dp/B0FMRL3XGV/?_encoding=UTF8&pd_rd_w=9YfLJ&content-id=amzn1.sym.74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_p=74aa624f-4750-42af-9ab4-4ec9addf0341&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE1
              - img "SNS DECOR Metal Sunset Serenity LED Wall Art | Abstract Sun Wall Decor | Modern Handcrafted Designer Sun Iron Wall Decor with LED | Perfect for Living Room, Drawing Room, Restaurant (Copper Antique)" [ref=e366]
        - generic [ref=e368]:
          - heading "Min.30% off | Top selections from Small Businesses" [level=2] [ref=e370]:
            - generic [ref=e372]: Min.30% off | Top selections from Small Businesses
          - generic [ref=e374]:
            - link "CREATIVE QUBE Engineered Wood Study & Office Table 120x60x75cm | Matte Finish | Free Standing Compact Computer Desk with Drawer & Cabinet | 1 Year Warranty | Brown Finish - Urban Teak" [ref=e376] [cursor=pointer]:
              - /url: /CREATIVE-QUBE-120x60x75cm-Engineered-Warranty/dp/B0FKHC2V4B/?_encoding=UTF8&pd_rd_w=B6YCl&content-id=amzn1.sym.a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_p=a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE2
              - img "CREATIVE QUBE Engineered Wood Study & Office Table 120x60x75cm | Matte Finish | Free Standing Compact Computer Desk with Drawer & Cabinet | 1 Year Warranty | Brown Finish - Urban Teak" [ref=e378]
            - link "CREATIVE QUBE 75cm Height Engineered Wood Ergonomic Prime Desk for Office Workstation for 2 | Laptop Desk, Gaming Setup, Work from Home, Hostel, Reception, Counter Table | Easy DIY Assembly- White" [ref=e380] [cursor=pointer]:
              - /url: /CREATIVE-QUBE-Engineered-Prime-Desk/dp/B0F5QLS6SB/?_encoding=UTF8&pd_rd_w=B6YCl&content-id=amzn1.sym.a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_p=a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE2
              - img "CREATIVE QUBE 75cm Height Engineered Wood Ergonomic Prime Desk for Office Workstation for 2 | Laptop Desk, Gaming Setup, Work from Home, Hostel, Reception, Counter Table | Easy DIY Assembly- White" [ref=e382]
            - link "KalaTree Table Runner for 6 Seater Dining Table Centre Table 60 inch Handmade Reversible Heat Resistant | Korai River Grass Zero Plastic Madurkathi Eco Friendly | Rustic Boho | Maroon White Runner" [ref=e384] [cursor=pointer]:
              - /url: /KalaTree-Reversible-Madurkathi-Maroon-White/dp/B0FQG5DBDT/?_encoding=UTF8&pd_rd_w=B6YCl&content-id=amzn1.sym.a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_p=a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE2
              - img "KalaTree Table Runner for 6 Seater Dining Table Centre Table 60 inch Handmade Reversible Heat Resistant | Korai River Grass Zero Plastic Madurkathi Eco Friendly | Rustic Boho | Maroon White Runner" [ref=e386]
            - link "SHILP KATHA Antique Showpiece Wooden Handicraft for Living Room Home Decor — Handmade Heritage Ethnic Accent for House Warming Gift and Home Decoration | Ram Krishna" [ref=e388] [cursor=pointer]:
              - /url: /SHILP-KATHA-Mythology-Handicraft-Showpiece/dp/B0BWX1K1NF/?_encoding=UTF8&pd_rd_w=B6YCl&content-id=amzn1.sym.a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_p=a0f68b74-8e6e-4593-a797-bc3c5271cf5d&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_NAMABE2
              - img "SHILP KATHA Antique Showpiece Wooden Handicraft for Living Room Home Decor — Handmade Heritage Ethnic Accent for House Warming Gift and Home Decoration | Ram Krishna" [ref=e390]
        - generic [ref=e392]:
          - heading "Up to 60% off | Home & kitchen essentials from women owned brands" [level=2] [ref=e394]:
            - generic [ref=e396]: Up to 60% off | Home & kitchen essentials from women owned brands
          - generic [ref=e398]:
            - link "hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits | BPA-Free Kitchen Storage Container for Fridge Organisation" [ref=e400] [cursor=pointer]:
              - /url: /Hago-Containers-Container-Vegetable-Refrigerator/dp/B0CQ1XDP1T/?_encoding=UTF8&pd_rd_w=jMsfi&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_kar_gw_pc_en_
              - img "hago Refrigerator Organizer Container with 6 Grid Compartments | 1200 ML Fridge Storage Box for Vegetables & Fruits | BPA-Free Kitchen Storage Container for Fridge Organisation" [ref=e402]
            - link "hago Fridge Storage Boxes, Fridge Organiser, Container for Kitchen Storage Set, Plastic containers for kitchen storage, Durable Containers for Storage for Efficient Organisation (2) (2 NOS)." [ref=e404] [cursor=pointer]:
              - /url: /hago-containers-Containers-Organisation-NOS/dp/B0CQ2R8RGG/?_encoding=UTF8&pd_rd_w=jMsfi&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_kar_gw_pc_en_
              - img "hago Fridge Storage Boxes, Fridge Organiser, Container for Kitchen Storage Set, Plastic containers for kitchen storage, Durable Containers for Storage for Efficient Organisation (2) (2 NOS)." [ref=e406]
            - link "Satpurush Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware and Accessories, Storage Racks (2 Shelf) Plastic, Multicolour" [ref=e408] [cursor=pointer]:
              - /url: /Satpurush-Bathroom-Accessories-Organizer-Multicolour/dp/B0CP5TXW2P/?_encoding=UTF8&pd_rd_w=jMsfi&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_kar_gw_pc_en_
              - img "Satpurush Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware and Accessories, Storage Racks (2 Shelf) Plastic, Multicolour" [ref=e410]
            - link "Satpurush Plastic Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware & Accessories, Storage Racks (3 Pack, Bath Shelf with Soap Dish & 4 Hook) White" [ref=e412] [cursor=pointer]:
              - /url: /Satpurush-Bathroom-Accessories-Organizer-Hardware/dp/B0C85ZTP4P/?_encoding=UTF8&pd_rd_w=jMsfi&content-id=amzn1.sym.f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_p=f1901f75-ec04-459f-a75b-bcb040ffd6b7&pf_rd_r=GN3W578JVWE4EN38ZNXG&pd_rd_wg=fJI8m&pd_rd_r=26d41f49-a0c6-4335-98cd-d744996b7012&ref_=pd_hp_d_btf_kar_gw_pc_en_
              - img "Satpurush Plastic Bathroom Accessories, Bathroom Rack, Bathroom Shelf Organizer, Wall Mounted Shelf, Bathroom Hardware & Accessories, Storage Racks (3 Pack, Bath Shelf with Soap Dish & 4 Hook) White" [ref=e414]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('Page Screenshot', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://www.amazon.in/');
  6  |     await page.waitForTimeout(4000);
  7  |     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'HomePage.png' });
  8  | 
  9  | });
  10 | 
  11 | test('FullPage Screenshot', async ({ page }) => {
  12 | 
  13 |     await page.goto('https://www.amazon.in/');
  14 |     await page.waitForTimeout(4000);
  15 |     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: true });
  16 | 
  17 | });
  18 | 
  19 | 
  20 | test.only('Element Screenshot', async ({ page }) => {
  21 | 
  22 |     await page.goto('https://www.amazon.in/');
  23 |     await page.waitForTimeout(4000);
  24 |     await page.locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]')
> 25 |     .screenshot({ path: 'tests/screenshot/' + Date.now() + 'ElementScreenshot.png' });
     |      ^ Error: locator.screenshot: Error: strict mode violation: locator('//div[@class="a-section a-spacing-none _Zmx1a_fluidImageContainer_2SOMr"]') resolved to 16 elements:
  26 | 
  27 | });
```