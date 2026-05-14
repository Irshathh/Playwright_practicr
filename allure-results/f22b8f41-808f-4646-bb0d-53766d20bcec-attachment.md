# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> Element screenshot
- Location: tests\screenshot.spec.js:24:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#sobe_d_b_ms_2_2')

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
    - heading "Keyboard shortcuts" [level=2] [ref=e9]
    - list "Keyboard shortcuts" [ref=e10]:
      - listitem [ref=e11]:
        - link "Search, alt, forward slash" [ref=e12] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e13]:
            - generic [ref=e14]: Search
            - generic [ref=e15]:
              - generic [ref=e16]: alt
              - generic [ref=e17]: +
              - generic [ref=e18]: /
      - listitem [ref=e19]:
        - link "Cart, shift, alt, c" [ref=e20] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e21]:
            - generic [ref=e22]: Cart
            - generic [ref=e23]:
              - generic [ref=e24]: shift
              - generic [ref=e25]: +
              - generic [ref=e26]: alt
              - generic [ref=e27]: +
              - generic [ref=e28]: C
      - listitem [ref=e29]:
        - link "Home, shift, alt, h" [ref=e30] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e31]:
            - generic [ref=e32]: Home
            - generic [ref=e33]:
              - generic [ref=e34]: shift
              - generic [ref=e35]: +
              - generic [ref=e36]: alt
              - generic [ref=e37]: +
              - generic [ref=e38]: H
      - listitem [ref=e39]:
        - link "Your orders, shift, alt, o" [ref=e40] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e41]:
            - generic [ref=e42]: Orders
            - generic [ref=e43]:
              - generic [ref=e44]: shift
              - generic [ref=e45]: +
              - generic [ref=e46]: alt
              - generic [ref=e47]: +
              - generic [ref=e48]: O
      - listitem [ref=e49]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=e50] [cursor=pointer]:
          - generic [ref=e51]:
            - generic [ref=e52]: Show/Hide shortcuts
            - generic [ref=e53]:
              - generic [ref=e54]: shift
              - generic [ref=e55]: +
              - generic [ref=e56]: alt
              - generic [ref=e57]: +
              - generic [ref=e58]: Z
    - generic [ref=e64]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=e65]:
    - navigation "Primary" [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e68]:
          - link "Amazon.in" [ref=e70] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Mumbai 400001 Update location" [ref=e73] [cursor=pointer]:
            - generic [ref=e75]:
              - generic [ref=e76]: Delivering to Mumbai 400001
              - generic [ref=e77]: Update location
        - search [ref=e80]:
          - generic [ref=e83]:
            - generic [ref=e85]: All
            - combobox "Select the department you want to search in" [ref=e87] [cursor=pointer]:
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
          - searchbox "Search Amazon.in" [ref=e90]
          - generic "Go" [ref=e93] [cursor=pointer]:
            - button "Go" [ref=e94]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e98] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=e101]:
                - img "India" [ref=e102]
                - generic [ref=e103]: EN
            - button "Expand to Change Language or Country" [ref=e104] [cursor=pointer]
          - generic [ref=e105]:
            - link "Hello, sign in Account & Lists" [ref=e106] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%2F%3F_encoding%3DUTF8%26node%3D5925789031%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=e108]: Hello, sign in
              - generic [ref=e109]: Account & Lists
            - button "Expand Account and Lists" [ref=e110] [cursor=pointer]
          - link "Returns & Orders" [ref=e111] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e112]: Returns
            - generic [ref=e113]: "& Orders"
          - link "0 items in cart" [ref=e114] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e116]: "0"
            - generic [ref=e119]: Cart
      - generic [ref=e120]:
        - button "Open All Categories Menu" [ref=e122] [cursor=pointer]:
          - generic [ref=e124]: All
        - list [ref=e128]:
          - listitem [ref=e129]:
            - link "Fresh" [ref=e131] [cursor=pointer]:
              - /url: /fresh?ref_=nav_cs_fresh
          - listitem [ref=e132]:
            - link "MX Player" [ref=e134] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e135]:
            - link "Sell" [ref=e137] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e138]:
            - link "Bestsellers" [ref=e140] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e141]:
            - link "Mobiles" [ref=e143] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e144]:
            - link "Today's Deals" [ref=e146] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e147]:
            - link "Customer Service" [ref=e149] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e150]:
            - link "New Releases" [ref=e152] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e153]:
            - generic [ref=e154]:
              - link "Prime" [ref=e155] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=e156] [cursor=pointer]
          - listitem [ref=e157]:
            - link "Amazon Pay" [ref=e159] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e160]:
            - link "Electronics" [ref=e162] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e163]:
            - link "Fashion" [ref=e165] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e166]:
            - link "Home & Kitchen" [ref=e168] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e169]:
            - link "Computers" [ref=e171] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e172]:
            - link "Books" [ref=e174] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e175]:
            - link "Toys & Games" [ref=e177] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e178]:
            - link "Gift Cards" [ref=e180] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e181]:
            - link "Beauty & Personal Care" [ref=e183] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e184]:
            - link "Car & Motorbike" [ref=e186] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e187]:
            - link "Home Improvement" [ref=e189] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e190]:
            - link "Custom Products" [ref=e192] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e193]:
            - link "Sports, Fitness & Outdoors" [ref=e195] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e196]:
            - link "Health, Household & Personal Care" [ref=e198] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e199]:
            - link "Grocery & Gourmet Foods" [ref=e201] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e202]:
            - link "Pet Supplies" [ref=e204] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e205]:
            - link "Baby" [ref=e207] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e208]:
            - link "Video Games" [ref=e210] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e211]:
            - link "AmazonBasics" [ref=e213] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e214]:
            - link "Audible" [ref=e216] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e217]:
            - link "Subscribe & Save" [ref=e219] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e220]:
            - link "Kindle eBooks" [ref=e222] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e223]:
            - link "Flights" [ref=e225] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
        - link "Jan26_Event" [ref=e229] [cursor=pointer]:
          - /url: /events/greatsummersale/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=fd8c216f-809c-49de-9709-8ec9b90e3b19&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=G9A4G12W4P7VGMXZ8T39
          - img "Jan26_Event" [ref=e230]
      - dialog [ref=e231]
  - complementary "Your recently viewed items and featured recommendations" [ref=e233]:
    - generic [ref=e236]:
      - generic [ref=e237]: Your recently viewed items and featured recommendations
      - generic [ref=e239]:
        - generic [ref=e240]:
          - generic [ref=e241]: ›
          - link "View or edit your browsing history" [ref=e243] [cursor=pointer]:
            - /url: /gp/history
        - generic [ref=e244]: After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in.
  - generic [ref=e245]:
    - button "Back to top" [ref=e246] [cursor=pointer]:
      - generic [ref=e247]: Back to top
    - generic [ref=e248]:
      - generic [ref=e249]:
        - heading "Get to Know Us" [level=6] [ref=e250]
        - list [ref=e251]:
          - listitem [ref=e252]:
            - link "About Amazon" [ref=e253] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e254]:
            - link "Careers" [ref=e255] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=e256]:
            - link "Press Releases" [ref=e257] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e258]:
            - link "Amazon Science" [ref=e259] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=e261]:
        - heading "Connect with Us" [level=6] [ref=e262]
        - list [ref=e263]:
          - listitem [ref=e264]:
            - link "Facebook" [ref=e265] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=e266]:
            - link "Twitter" [ref=e267] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=e268]:
            - link "Instagram" [ref=e269] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=e271]:
        - heading "Make Money with Us" [level=6] [ref=e272]
        - list [ref=e273]:
          - listitem [ref=e274]:
            - link "Sell on Amazon" [ref=e275] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=e276]:
            - link "Sell under Amazon Accelerator" [ref=e277] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=e278]:
            - link "Protect and Build Your Brand" [ref=e279] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=e280]:
            - link "Amazon Global Selling" [ref=e281] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=e282]:
            - link "Supply to Amazon" [ref=e283] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=e284]:
            - link "Become an Affiliate" [ref=e285] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=e286]:
            - link "Fulfilment by Amazon" [ref=e287] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=e288]:
            - link "Advertise Your Products" [ref=e289] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=e290]:
            - link "Amazon Pay on Merchants" [ref=e291] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=e293]:
        - heading "Let Us Help You" [level=6] [ref=e294]
        - list [ref=e295]:
          - listitem [ref=e296]:
            - link "Your Account" [ref=e297] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=e298]:
            - link "Returns Centre" [ref=e299] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=e300]:
            - link "Recalls and Product Safety Alerts" [ref=e301] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=e302]:
            - link "100% Purchase Protection" [ref=e303] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=e304]:
            - link "Amazon App Download" [ref=e305] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=e306]:
            - link "Help" [ref=e307] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=e309]:
      - link "Amazon India Home" [ref=e312] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=e315]:
        - generic [ref=e316]:
          - link "Choose a language for shopping. Current selection is English." [ref=e317] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=e319]: English
          - button "Expand to Change Language or Country" [ref=e320] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=e321] [cursor=pointer]:
          - generic [ref=e323]: India
    - generic "More on Amazon" [ref=e324]:
      - generic "More on Amazon" [ref=e325]:
        - list [ref=e326]:
          - listitem [ref=e327]:
            - link "AbeBooks Books, art & collectibles" [ref=e328] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=e329]
              - generic [ref=e330]:
                - text: Books, art
                - text: "& collectibles"
          - listitem [ref=e331]
          - listitem [ref=e332]:
            - link "Amazon Web Services Scalable Cloud Computing Services" [ref=e333] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=e334]
              - generic [ref=e335]:
                - text: Scalable Cloud
                - text: Computing Services
          - listitem [ref=e336]
          - listitem [ref=e337]:
            - link "Audible Download Audio Books" [ref=e338] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=e339]
              - generic [ref=e340]:
                - text: Download
                - text: Audio Books
          - listitem [ref=e341]
          - listitem [ref=e342]:
            - link "IMDb Movies, TV & Celebrities" [ref=e343] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=e344]
              - generic [ref=e345]:
                - text: Movies, TV
                - text: "& Celebrities"
        - list [ref=e346]:
          - listitem [ref=e347]:
            - link "Shopbop Designer Fashion Brands" [ref=e348] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=e349]
              - generic [ref=e350]:
                - text: Designer
                - text: Fashion Brands
          - listitem [ref=e351]
          - listitem [ref=e352]:
            - link "Amazon Business Everything For Your Business" [ref=e353] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=e354]
              - generic [ref=e355]:
                - text: Everything For
                - text: Your Business
          - listitem [ref=e356]
          - listitem [ref=e357]:
            - link "Amazon Prime Music 100 million songs, ad-free Over 15 million podcast episodes" [ref=e358] [cursor=pointer]:
              - /url: /music/prime?ref=footer_apm
              - heading "Amazon Prime Music" [level=5] [ref=e359]
              - generic [ref=e360]:
                - text: 100 million songs, ad-free
                - text: Over 15 million podcast episodes
          - listitem [ref=e361]
          - listitem [ref=e362]
    - generic [ref=e363]:
      - list [ref=e364]:
        - listitem [ref=e365]:
          - link "Conditions of Use & Sale" [ref=e366] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=e367]:
          - link "Privacy Notice" [ref=e368] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=e369]:
          - link "Interest-Based Ads" [ref=e370] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=e371]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=e373]:
    - iframe [ref=f1e2]:
      - generic [active]:
        - img [ref=f2e1]
        - img [ref=f2e2]
        - img [ref=f2e3]
        - img [ref=f2e4]
        - img [ref=f2e5]
        - img [ref=f2e6]
        - img [ref=f2e7]
        - img [ref=f2e8]
        - img [ref=f2e9]
        - img [ref=f2e10]
        - img [ref=f2e11]
        - img [ref=f2e12]
        - img [ref=f2e13]
        - img [ref=f2e14]
        - img [ref=f2e15]
        - img [ref=f2e16]
        - img [ref=f2e17]
        - img [ref=f2e18]
        - img [ref=f2e19]
        - img [ref=f2e20]
        - img [ref=f2e21]
        - img [ref=f2e22]
        - img [ref=f2e23]
        - img [ref=f2e24]
        - img [ref=f2e25]
        - img [ref=f2e26]
        - img [ref=f2e27]
        - img [ref=f2e28]
        - img [ref=f2e29]
        - img [ref=f2e30]
        - img [ref=f2e31]
        - img [ref=f2e32]
        - img [ref=f2e33]
        - img [ref=f2e34]
        - img [ref=f2e35]
        - img [ref=f2e36]
        - img [ref=f2e37]
        - img [ref=f2e38]
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test, expect} from '@playwright/test'
  4  | test('page screenshot', async({page})=>{
  5  | 
  6  |     await page.goto('https://www.amazon.in/');
  7  | 
  8  |     await page.waitForTimeout(4000);
  9  | 
  10 | 
  11 |     await page.screenshot({path: 'tests/screenshot/' + Date.now() + 'Homepage.png'})
  12 |    
  13 | })
  14 | 
  15 | test('Full page screenshot',async({page})=>{
  16 |     await page.goto('https://www.amazon.in/')
  17 | 
  18 |     await page.waitForTimeout(5000)
  19 |     
  20 |     await page.screenshot({path: 'tests/screenshot' + 'Fullpage.png', fullPage: true})
  21 |     
  22 | })
  23 | 
  24 | test.only('Element screenshot', async({page})=>{
  25 |     await page.goto('https://www.amazon.in/b/?_encoding=UTF8&node=5925789031&ref_=sv_top_hk_mega_3')
  26 |     
  27 |     await page.waitForTimeout(5000)
> 28 |     await page.locator('#sobe_d_b_ms_2_2').screenshot({path:'tests/screenshot' + "Oven.png"})
     |                                            ^ Error: locator.screenshot: Test timeout of 30000ms exceeded.
  29 | 
  30 |     
  31 | })
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
```