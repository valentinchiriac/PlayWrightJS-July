const { test, expect } = require("@playwright/test");

test.only("VerifyUserRegisterAndLogin", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
  await page.locator("#firstName").fill("Matt");
  await page.locator("#lastName").fill("Damon");
  await page.locator("#userEmail").fill("odissey@endava.com");
  await page.locator("#userMobile").fill("564616568441888");
  await page.locator('[formcontrolname="occupation"]').click();
  await page
    .locator('[formcontrolname="occupation"]')
    .selectOption({ label: "Engineer" });
  await page.locator('[formcontrolname="gender"][value="Male"]').check();
});
