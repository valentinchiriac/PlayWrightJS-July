const base = require("@playwright/test");
const { expect } = base;
const { APiUtils } = require("./utils/APiUtils");
const { request } = require("@playwright/test");
const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
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
      await expect(page.locator(".card-body b").first()).toBeVisible();
      await use(page);
    } finally {
      await loginContext.close();
    }
  },
  createOrder: async ({ authenticatedPage }, use) => {
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);
    use(response);
  },
});
