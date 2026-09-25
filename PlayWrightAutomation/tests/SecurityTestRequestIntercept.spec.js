const { test, expect } = require("@playwright/test");
const { url } = require("node:inspector");
const unauthorizedOrderId = "621661f884b053f6765465b6";

test("Security test request intercept", async ({ page }) => {
  //login and reach orders page
  const email = "toader.chiriac@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Anaaremere1!");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  await page.locator("button[routerlink*='myorders']").click();
  //intercept the request and change the url to a different order id
  (await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-details?id=*",
  ),
    async (route) =>
      route.continue({
        url: `https://rahulshettyacademy.com/api/ecom/order/get-orders-for-details?id=${unauthorizedOrderId}`,
      })); //this is used to intercept the network request to the get-orders-for-details endpoint and return a fake response with no orders
  //   const [detailsResponse] = await Promise.all([
  //     page.waitForResponse((response) =>
  //       response.url().includes("/api/ecom/order/get-orders-for-details"),
  //     ),
  //     await page.locator("button:has-text('View')").first().click(),
  //   ]);
  //   expect(detailsResponse.status()).toBe(403);
  (await page.locator("button:has-text('View')").first().click(),
    (await expect(page.locator("p").last()).toHaveText(
      "You are not authorized to view this order",
    ),
    await page.pause()));
});
