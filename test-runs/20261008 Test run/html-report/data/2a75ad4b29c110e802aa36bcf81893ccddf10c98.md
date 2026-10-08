# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260804NetworkTest.spec.js >> @API displays no orders. This test is used to verify that the API returns no orders for a specific customer. It injects the token into the browser's local storage so that the orders page is displaying an empty page
- Location: PlayWrightAutomation\tests\20260804NetworkTest.spec.js:16:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 20000ms exceeded.
=========================== logs ===========================
waiting for response "**/api/ecom/order/get-orders-for-customer/*"
============================================================
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
  - generic [ref=e25]: You have No Orders to show at this time. Please Visit Back Us
  - generic [ref=e28]:
    - button "Go Back to Shop" [ref=e29] [cursor=pointer]
    - button "Go Back to Cart" [ref=e30] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect, request } = require("@playwright/test");
  2  | const { APiUtils } = require("./utils/APiUtils");
  3  | const loginPayLoad = {
  4  |   userEmail: "toader.chiriac@gmail.com",
  5  |   userPassword: "Anaaremere1!",
  6  | };
  7  | const fakePayLoad = { data: [], message: "No Orders" };
  8  | 
  9  | let response;
  10 | test.beforeAll(async () => {
  11 |   const apiContext = await request.newContext(); //this is used to create a new API context for making HTTP requests
  12 |   const apiUtils = new APiUtils(apiContext, loginPayLoad); // this is used to create a new instance of the APiUtils class, passing in the apiContext and loginPayLoad as parameters
  13 |   response = { token: await apiUtils.getToken() };
  14 | });
  15 | 
  16 | test("@API displays no orders. This test is used to verify that the API returns no orders for a specific customer. It injects the token into the browser's local storage so that the orders page is displaying an empty page", async ({
  17 |   page,
  18 | }) => {
  19 |   await page.addInitScript((value) => {
  20 |     window.localStorage.setItem("token", value); // this is used to set the token in the local storage of the browser, so that the user is authenticated when they visit the page
  21 |   }, response.token);
  22 |   await page.route(
  23 |     "**/api/ecom/order/get-orders-for-customer/*",
  24 |     async (route) => {
  25 |       await route.fulfill({ json: fakePayLoad }); // this is used to intercept the network request to the get-orders-for-customer endpoint and return a fake response with no orders
  26 |     },
  27 |   );
  28 | 
  29 |   await page.goto("https://rahulshettyacademy.com/client");
  30 |   await page.locator("button[routerlink*='myorders']").click(); // click on the "My Orders" button to navigate to the orders page
  31 |   await expect(page.locator(".mt-4")).toContainText("You have No Orders");
> 32 |   await page.waitForResponse("**/api/ecom/order/get-orders-for-customer/*");
     |              ^ Error: page.waitForResponse: Test timeout of 20000ms exceeded.
  33 |   let orderRows = await page.locator(".mt-4").textContent();
  34 |   console.log(orderRows);
  35 | });
  36 | 
```