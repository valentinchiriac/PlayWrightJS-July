# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260925SecurityTestRequestIntercept.spec.js >> Security test request intercept
- Location: PlayWrightAutomation\tests\20260925SecurityTestRequestIntercept.spec.js:5:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('p').last()
Expected: "You are not authorized to view this order"
Received: " Country - India "

Call log:
  - Expect "toHaveText" with timeout 30000ms
  - waiting for locator('p').last()
    3 × locator resolved to <p _ngcontent-ydo-c33="">Automation Practice</p>
      - unexpected value "Automation Practice"
    31 × locator resolved to <p class="text" _ngcontent-ydo-c41=""> Country - India </p>
       - unexpected value " Country - India "
  - Test timeout of 20000ms exceeded.

```

```yaml
- paragraph: Country - India
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { url } = require("node:inspector");
  3  | const unauthorizedOrderId = "621661f884b053f6765465b6";
  4  | 
  5  | test("Security test request intercept", async ({ page }) => {
  6  |   //login and reach orders page
  7  |   const email = "toader.chiriac@gmail.com";
  8  |   await page.goto("https://rahulshettyacademy.com/client");
  9  |   await page.locator("#userEmail").fill(email);
  10 |   await page.locator("#userPassword").fill("Anaaremere1!");
  11 |   await page.locator("[value='Login']").click();
  12 |   await page.waitForLoadState("networkidle");
  13 |   await page.locator(".card-body b").first().waitFor();
  14 |   await page.locator("button[routerlink*='myorders']").click();
  15 |   //intercept the request and change the url to a different order id
  16 |   (await page.route(
  17 |     "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-details?id=*",
  18 |   ),
  19 |     async (route) =>
  20 |       route.continue({
  21 |         url: `https://rahulshettyacademy.com/api/ecom/order/get-orders-for-details?id=${unauthorizedOrderId}`,
  22 |       })); //this is used to intercept the network request to the get-orders-for-details endpoint and return a fake response with no orders
  23 |   //   const [detailsResponse] = await Promise.all([
  24 |   //     page.waitForResponse((response) =>
  25 |   //       response.url().includes("/api/ecom/order/get-orders-for-details"),
  26 |   //     ),
  27 |   //     await page.locator("button:has-text('View')").first().click(),
  28 |   //   ]);
  29 |   //   expect(detailsResponse.status()).toBe(403);
  30 |   (await page.locator("button:has-text('View')").first().click(),
> 31 |     await expect(page.locator("p").last()).toHaveText(
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  32 |       "You are not authorized to view this order",
  33 |     ));
  34 | });
  35 | 
```