const base = require("@playwright/test");
const { APiUtils } = require("../tests/utils/APiUtils.js");
const { request } = require("@playwright/test");

const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
};

const orderPayLoad = {
  orders: [
    {
      country: "Romania",
      productOrderedId: "6960ea76c941646b7a8b3dd5",
    },
  ],
};

exports.customTest = base.test.extend({
  authenticatedPage: async ({ browser }, use) => {
    const loginContext = await browser.newContext();
    const page = await loginContext.newPage();

    try {
      await page.goto("https://rahulshettyacademy.com/client");
      await page.locator("#userEmail").fill(loginPayLoad.userEmail);
      await page.locator("#userPassword").fill(loginPayLoad.userPassword);
      await page.locator("[value='Login']").click();
      await base.expect(page.locator(".card-body b").first()).toBeVisible();
      await use(page);
    } finally {
      await loginContext.close();
    }
  },
  createOrder: async ({}, use) => {
    const apiContext = await request.newContext();

    try {
      const apiUtils = new APiUtils(apiContext, loginPayLoad);
      const response = await apiUtils.createOrder(orderPayLoad);
      await use(response);
    } finally {
      await apiContext.dispose(); //this is to close the apiContext after the test is done, so that it doesn't keep running in the background and consuming resources.
    }
  },
  testDataForOrder: {
    productName: "adidas original",
  },
});
