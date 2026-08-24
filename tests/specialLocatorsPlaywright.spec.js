const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("node:dns/promises");

test.only("PlaywrightSpecialLocators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  //o optiune de locatori specifici pentru playwright (getByLabel)
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  //valabil pentru check-boxes
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("Nolan2026");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page
      .getByText("Success coaie! The Form has been submitted successfully")
      .toBeVisible({ timeout: 10_000 }),
  );
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button")
    .click();
});
