const { test, expect, request } = require("@playwright/test");
const { customTest } = require("../utils/fixtures.js");

customTest(
  "Verify use of fixtures in Playwright",
  async ({ authenticatedPage, createOrder }) => {
    // a fixture is a reusable piece of code that can be used to set up a test environment or provide test data. In Playwright, fixtures can be used to create a consistent test environment across multiple tests, and can help reduce code duplication and improve test maintainability.
    await authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText("orderId")).toBeVisible();
    await expect(
      authenticatedPage.locator(".card-body b").first(),
    ).toBeVisible();
    await createOrder;
  },
);
