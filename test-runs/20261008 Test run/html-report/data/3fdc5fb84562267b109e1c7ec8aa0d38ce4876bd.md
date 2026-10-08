# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260921WebAPIPart2.spec.js >> Login and Add Product to Cart
- Location: PlayWrightAutomation\tests\20260921WebAPIPart2.spec.js:61:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-gvq-c39="" class="ng-star-inserted"> | 6ac75b312be7a4bc2b9411d7 | </label> aka getByText('| 6ac75b312be7a4bc2b9411d7 |')
    2) <label _ngcontent-gvq-c39="" class="ng-star-inserted"> | 6ac75b312be7a4bc2b9411da | </label> aka getByText('| 6ac75b312be7a4bc2b9411da |')

Call log:
  - waiting for locator('.em-spacer-1 .ng-star-inserted')

```

# Test source

```ts
  11  |   await page.locator("button[routerlink*='myorders']").click();
  12  |   await page.locator("tbody").waitFor();
  13  | 
  14  |   const rows = page.locator("tbody tr");
  15  |   let orderFound = false;
  16  | 
  17  |   for (let i = 0; i < (await rows.count()); i++) {
  18  |     const rowOrderId = (await rows.nth(i).locator("th").textContent()).trim();
  19  | 
  20  |     if (orderId.includes(rowOrderId)) {
  21  |       await rows.nth(i).locator("button").first().click();
  22  |       orderFound = true;
  23  |       break;
  24  |     }
  25  |   }
  26  |   console.log("the order found is " + orderFound);
  27  | 
  28  |   expect(orderFound).toBeTruthy();
  29  | 
  30  |   const displayedOrderId = (
  31  |     await page.locator(".col-text").textContent()
  32  |   ).trim();
  33  |   expect(orderId).toContain(displayedOrderId);
  34  | }
  35  | 
  36  | test.beforeAll(async ({ browser }) => {
  37  |   const loginContext = await browser.newContext();
  38  | 
  39  |   try {
  40  |     const page = await loginContext.newPage();
  41  | 
  42  |     await page.goto(baseUrl);
  43  |     await page.locator("#userEmail").fill("toader.chiriac@gmail.com");
  44  |     await page.locator("#userPassword").fill("Anaaremere1!");
  45  |     await page.locator("[value='Login']").click();
  46  |     await page.waitForLoadState("networkidle");
  47  |     await expect(page.locator(".card-body b").first()).toBeVisible();
  48  | 
  49  |     await loginContext.storageState({ path: authStatePath }); // Save the authentication state to a file
  50  |   } finally {
  51  |     await loginContext.close();
  52  |   }
  53  | 
  54  |   webContext = await browser.newContext({ storageState: authStatePath });
  55  | });
  56  | 
  57  | test.afterAll(async () => {
  58  |   await webContext?.close(); // Close the web context after all tests are done
  59  | });
  60  | 
  61  | test("Login and Add Product to Cart", async () => {
  62  |   const page = await webContext.newPage();
  63  | 
  64  |   try {
  65  |     await page.goto(baseUrl); // Navigate to the base URL
  66  | 
  67  |     const products = page.locator(".card-body");
  68  |     await page.locator(".card-body b").first().waitFor();
  69  | 
  70  |     let productFound = false;
  71  |     const count = await products.count();
  72  |     console.log("the count is " + count);
  73  | 
  74  |     for (let i = 0; i < count; i++) {
  75  |       const product = products.nth(i);
  76  |       const title = (await product.locator("b").innerText()).trim();
  77  |       console.log("the title is " + title);
  78  | 
  79  |       if (title.toLowerCase().includes(productName.toLowerCase())) {
  80  |         await product.locator("text= Add To Cart").click();
  81  |         productFound = true;
  82  |         break;
  83  |       }
  84  |     }
  85  | 
  86  |     expect(productFound).toBeTruthy();
  87  | 
  88  |     await page.locator("[routerlink*='cart']").click(); // Click on the cart link
  89  |     await page.locator("div li").first().waitFor(); // Wait for the first item in the cart to be visible
  90  |     await expect(page.locator("h3", { hasText: productName })).toBeVisible(); // Verify that the product is in the cart
  91  | 
  92  |     await page.getByText("Checkout", { exact: true }).click();
  93  |     await page
  94  |       .locator("[placeholder*='Country']")
  95  |       .pressSequentially("ind", { delay: 100 });
  96  | 
  97  |     const dropdown = page.locator(".ta-results");
  98  |     await expect(dropdown).toBeVisible();
  99  | 
  100 |     const indiaOption = dropdown.getByText("India", { exact: true });
  101 |     await expect(indiaOption).toBeVisible();
  102 |     await indiaOption.scrollIntoViewIfNeeded();
  103 |     await indiaOption.click();
  104 | 
  105 |     await page.locator(".action__submit").click();
  106 |     await expect(page.locator(".hero-primary")).toContainText(
  107 |       "Thankyou for the order",
  108 |     );
  109 | 
  110 |     const orderId = (
> 111 |       await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
      |                                                            ^ Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
  112 |     ).trim();
  113 |     await checkOrderId(page, orderId);
  114 |     console.log("the order id is " + orderId);
  115 |   } finally {
  116 |     await page.close();
  117 |   }
  118 | });
  119 | 
```