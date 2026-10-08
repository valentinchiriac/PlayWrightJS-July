# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260819e2e-addToCart.spec.js >> VerifyUserLoginAndAddProductsToCart
- Location: PlayWrightAutomation\tests\20260819e2e-addToCart.spec.js:4:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { text } = require("node:stream/consumers");
  3  | 
  4  | test("VerifyUserLoginAndAddProductsToCart", async ({ page }) => {
  5  |   const productName = "ZARA COAT 3";
  6  |   const email = "toader.chiriac@gmail.com";
  7  |   await page.goto("https://rahulshettyacademy.com/client");
  8  |   await page.locator("#userEmail").fill(email);
  9  |   await page.locator("#userPassword").fill("Anaaremere1!");
  10 |   await page.locator("[value='Login']").click();
  11 | 
  12 |   // Confirm that login succeeded.
  13 |   await expect(page).toHaveURL(/dashboard/);
  14 | 
  15 |   const products = page.locator(".card-body");
  16 |   //wait for at least one product to be visible
  17 |   await expect(products.first()).toBeVisible();
  18 |   //asteapta pana cand callurile de backend din Network sunt facute
  19 |   await page.waitForLoadState("networkidle");
  20 |   //creat o constanta in care sunt stocate toate titlurile produselor
  21 |   await page.locator(".card-body b").first().waitFor();
  22 |   const productTitlesFromThePage = await page
  23 |     .locator(".card-body b")
  24 |     .allTextContents();
  25 |   //afisarea produselor din pagina
  26 |   console.log("The products are:", productTitlesFromThePage);
  27 |   //ia toate produsele intr-un array si itereaza prin ele
  28 |   const countProducts = await products.count();
  29 |   for (let i = 0; i < countProducts; ++i) {
  30 |     //itereaza prin numele produselor din pagina si cand gaseste produsul dorit "product name"
  31 |     if ((await products.nth(i).locator("b").textContent()) === productName) {
  32 |       //add product to cart
  33 |       await products.nth(i).locator("text = Add To Cart").click();
  34 |       break;
  35 |     }
  36 |   }
  37 |   await page.locator("[routerlink='/dashboard/cart']").click();
> 38 |   await page.locator("div li").first().waitFor();
     |                                        ^ Error: locator.waitFor: Test timeout of 20000ms exceeded.
  39 |   const isProductPresent = await page
  40 |     .locator("h3:has-text('ZARA COAT 3')")
  41 |     .isVisible();
  42 |   await expect(isProductPresent).toBeTruthy();
  43 |   await page.locator("text=Checkout").click();
  44 |   //aici folosim pressSequentially pentru a tasta literele una cate una pt ca Paste nu functioneaza
  45 |   await page
  46 |     .locator("[placeholder*='Country']")
  47 |     .pressSequentially("roma", { delay: 150 });
  48 |   const countryOptions = await page.locator(".ta-results");
  49 |   // await expect(countryOptions).toBeVisible();
  50 |   // await countryOptions
  51 |   //   .getByRole("button", { name: "Oman", exact: true })
  52 |   //   .click();
  53 | 
  54 |   // await expect(countryOptions).toBeHidden();
  55 |   await countryOptions.waitFor();
  56 |   countryOptions.locator("button").count();
  57 |   for (let i = 0; i < countryOptions; i++) {
  58 |     const text = await countryOptions.locator("button").nth(i).textContent();
  59 |     if (text === "Romania") {
  60 |       await countryOptions.locator("button").nth(i).click();
  61 |       break;
  62 |     }
  63 |   }
  64 |   //urmatorul pas verifica daca adresa de email este cea introdusa la login de utilizator
  65 |   await expect(page.locator(".user__name [type='text']").first()).toHaveText(
  66 |     email,
  67 |   );
  68 |   const placeOrderBtn = page.locator(".action__submit");
  69 | 
  70 |   console.log("visible:", await placeOrderBtn.isVisible());
  71 |   console.log("enabled:", await placeOrderBtn.isEnabled());
  72 |   await placeOrderBtn.click();
  73 |   await expect(page.locator(".hero-primary")).toHaveText(
  74 |     " Thankyou for the order. ",
  75 |   );
  76 |   const orderId = await page
  77 |     .locator(".em-spacer-1 .ng-star-inserted")
  78 |     .textContent();
  79 |   console.log(orderId);
  80 | });
  81 | 
```