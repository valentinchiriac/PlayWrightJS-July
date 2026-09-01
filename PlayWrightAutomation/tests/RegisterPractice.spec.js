const { test, expect } = require("@playwright/test");

test("VerifyUserRegisterAndLogin", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
  await page.locator("#firstName").fill("Matt");
  await page.locator("#lastName").fill("Damon");
  await page.locator("#userEmail").fill("odissey@gmail.com");
  await page.locator("#userMobile").fill("564616568441888");
  await page.locator('[formcontrolname="occupation"]').click();
  await page
    .locator('[formcontrolname="occupation"]')
    .selectOption({ label: "Engineer" });
  await page.locator('[formcontrolname="gender"][value="Male"]').check();
  await page.locator("#userPassword").fill("ElectricBrother98*");
  await page.locator("#confirmPassword").fill("ElectricBrother98*");
  await page.locator('[formcontrolname="required"]').click();
  console.log(await page.locator('[class="btn1"]').textContent());
  const registerButton = page.locator(".btn1");
  await expect(registerButton).toHaveText(/Register/);
  await page.locator('[class="btn1"]').click();
  await expect(
    page.goto("https://rahulshettyacademy.com/client/#/auth/register"),
  );
});
