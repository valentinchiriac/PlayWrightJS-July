const { test, expect, request } = require("@playwright/test");

const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
};

const orderPayload = {
  country: "Romania",
  productOrderedId: "6960ea76c941646b7a8b3dd5",
};

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad,
    },
  );

  expect(loginResponse.ok()).toBeTruthy();

  const loginResponseJson = await loginResponse.json();

  token = loginResponseJson.token;

  console.log("The logintoken is:", token);

  const orderResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: orderPayload,
      headers: { Authorization: token, "Content-Type": "application/json" },
    },
  );
  expect(orderResponse.ok()).toBeTruthy();
  const orderResponseJson = await orderResponse.json();
  orderId = orderResponseJson.orders[0];
  console.log("Created order ID", orderId);
});

test("VerifyUserLoginAndGetProducts", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body b");
  await expect(products.first()).toBeVisible();

  const productTitlesFromThePage = await products.allTextContents();
  console.log("The products are:", productTitlesFromThePage);
});
