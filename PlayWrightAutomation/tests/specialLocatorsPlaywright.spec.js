const { test, expect } = require("@playwright/test");
const { TIMEOUT } = require("node:dns/promises");

test("PlaywrightSpecialLocators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  //o optiune de locatori specifici pentru playwright (getByLabel)
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  //valabil pentru check-boxes
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("Nolan2026");
  await page.getByRole("button", { name: "Submit" }).click();
  //default timeout este 5 secunde. daca se doreste suprascrierea wait-ului, se pune timeout: 10_000, valabil doar pt acest pas
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

test("TestingTimeOutsOnTestlevel", async ({ page }) => {
  //pentru a pune un wait valabil la nivel de test se creaza o noua constanta "slowExpect"
  const slowExpect = expect.configure({ timeout: 6000 });
  //noua constanta va inlocui in tot testul "expect"
  //acest setDefaultTimeout se refera strict la actiunile din test (check, click, fill)
  page.setDefaultTimeout(9000);
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  //o optiune de locatori specifici pentru playwright (getByLabel)
  await page.getByLabel("Check me out if you Love IceCreams!").check();
  //valabil pentru check-boxes
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByPlaceholder("Password").fill("Nolan2026");
  await page.getByRole("button", { name: "Submit" }).click();
  await slowExpect(
    page.getByText("Success! The Form has been submitted successfully"),
  ).toBeVisible();
  await page.getByRole("link", { name: "Shop" }).click();
  await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button")
    .click();
});
