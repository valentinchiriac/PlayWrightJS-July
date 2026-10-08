# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260831ClientApp.spec.js >> @Webst Client App login
- Location: PlayWrightAutomation\tests\20260831ClientApp.spec.js:24:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.user__name [type=\'text\']').first()
Expected: " "
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 30000ms
  - waiting for locator('.user__name [type=\'text\']').first()
    4 × locator resolved to <label type="text" _ngcontent-udy-c35="">toader.chiriac@gmail.com</label>
      - unexpected value "toader.chiriac@gmail.com"
  - Test ended.

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- paragraph: Thank you for Shopping With Us
- text: order summary Order Id 6ac75b102be7a4bc2b941076 Billing Address
- paragraph: toader.chiriac@gmail.com
- paragraph: Country - India
- text: Delivery Address
- paragraph: toader.chiriac@gmail.com
- paragraph: Country - India
- text: Product Ordered
- img
- text: ZARA COAT 3 by ECOM $ 11500 View Orders
```

# Test source

```ts
  1  | const { test, expect, request } = require("@playwright/test");
  2  | 
  3  | const loginPayLoad = {
  4  |   userEmail: "toader.chiriac@gmail.com",
  5  |   userPassword: "Anaaremere1!",
  6  | };
  7  | let token;
  8  | 
  9  | test.beforeAll(async () => {
  10 |   const apiContext = await request.newContext();
  11 | 
  12 |   const loginResponse = await apiContext.post(
  13 |     "https://rahulshettyacademy.com/api/ecom/auth/login",
  14 |     {
  15 |       data: loginPayLoad,
  16 |     },
  17 |   );
  18 |   expect(loginResponse.ok()).toBeTruthy();
  19 |   const loginResponseJson = await loginResponse.json();
  20 |   token = loginResponseJson.token;
  21 |   console.log("The logintoken is:", token);
  22 | });
  23 | 
  24 | test("@Webst Client App login", async ({ page }) => {
  25 |   //js file- Login js, DashboardPage
  26 | 
  27 |   // Inject token via API - skip UI login
  28 |   page.addInitScript((value) => {
  29 |     window.localStorage.setItem("token", value);
  30 |   }, token);
  31 | 
  32 |   //   await page.locator("#userEmail").fill(email);
  33 |   //   await page.locator("#userPassword").fill("Iamking@000");
  34 |   //   await page.locator("[value='Login']").click();
  35 |   //   await page.waitForLoadState("networkidle");
  36 |   const email = " ";
  37 |   const productName = "ZARA COAT 3";
  38 |   await page.goto("https://rahulshettyacademy.com/client");
  39 |   const products = page.locator(".card-body");
  40 |   await page.locator(".card-body b").first().waitFor();
  41 |   const titles = await page.locator(".card-body b").allTextContents();
  42 |   console.log(titles);
  43 |   const count = await products.count();
  44 |   for (let i = 0; i < count; ++i) {
  45 |     if ((await products.nth(i).locator("b").textContent()) === productName) {
  46 |       //add to cart
  47 |       await products.nth(i).locator("text= Add To Cart").click();
  48 |       break;
  49 |     }
  50 |   }
  51 | 
  52 |   await page.locator("[routerlink*='cart']").click();
  53 | 
  54 |   await page.locator("div li").first().waitFor();
  55 |   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
  56 |   expect(bool).toBeTruthy();
  57 |   await page.locator("text=Checkout").click();
  58 | 
  59 |   await page.locator("[placeholder*='Country']").pressSequentially("ind");
  60 |   const dropdown = page.locator(".ta-results");
  61 |   await dropdown.waitFor();
  62 |   const optionsCount = await dropdown.locator("button").count();
  63 |   for (let i = 0; i < optionsCount; ++i) {
  64 |     const text = await dropdown.locator("button").nth(i).textContent();
  65 |     if (text === " India") {
  66 |       await dropdown.locator("button").nth(i).click();
  67 |       break;
  68 |     }
  69 |   }
  70 | 
> 71 |   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
     |                                                             ^ Error: expect(locator).toHaveText(expected) failed
  72 |   await page.locator(".action__submit").click();
  73 |   await expect(page.locator(".hero-primary")).toHaveText(
  74 |     " Thankyou for the order. ",
  75 |   );
  76 |   const orderId = await page
  77 |     .locator(".em-spacer-1 .ng-star-inserted")
  78 |     .textContent();
  79 |   console.log(orderId);
  80 | 
  81 |   await page.locator("button[routerlink*='myorders']").click();
  82 |   await page.locator("tbody").waitFor();
  83 |   const rows = await page.locator("tbody tr");
  84 | 
  85 |   for (let i = 0; i < (await rows.count()); ++i) {
  86 |     const rowOrderId = await rows.nth(i).locator("th").textContent();
  87 |     if (orderId.includes(rowOrderId)) {
  88 |       await rows.nth(i).locator("button").first().click();
  89 |       break;
  90 |     }
  91 |   }
  92 |   const orderIdDetails = await page.locator(".col-text").textContent();
  93 |   expect(orderId.includes(orderIdDetails)).toBeTruthy();
  94 | });
  95 | 
```