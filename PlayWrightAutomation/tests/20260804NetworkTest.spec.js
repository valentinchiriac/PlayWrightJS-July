const { test, expect, request } = require("@playwright/test");
const { APiUtils } = require("./utils/APiUtils");
const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
};
const fakePayLoad = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
  const apiContext = await request.newContext(); //this is used to create a new API context for making HTTP requests
  const apiUtils = new APiUtils(apiContext, loginPayLoad); // this is used to create a new instance of the APiUtils class, passing in the apiContext and loginPayLoad as parameters
  response = { token: await apiUtils.getToken() };
});

test("@API displays no orders. This test is used to verify that the API returns no orders for a specific customer. It injects the token into the browser's local storage so that the orders page is displaying an empty page", async ({
  page,
}) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value); // this is used to set the token in the local storage of the browser, so that the user is authenticated when they visit the page
  }, response.token);
  await page.route(
    "**/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      await route.fulfill({ json: fakePayLoad }); // this is used to intercept the network request to the get-orders-for-customer endpoint and return a fake response with no orders
    },
  );

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click(); // click on the "My Orders" button to navigate to the orders page
  await expect(page.locator(".mt-4")).toContainText("You have No Orders");
  await page.waitForResponse("**/api/ecom/order/get-orders-for-customer/*");
  let orderRows = await page.locator(".mt-4").textContent();
  console.log(orderRows);
});
