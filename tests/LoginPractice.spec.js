const { test, expect } = require("@playwright/test");

test("VerifyUserLoginAndGetProducts", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("toader.chiriac@gmail.com");
  await page.locator("#userPassword").fill("Anaaremere1!");
  await page.locator("[value='Login']").click();

  // Confirm that login succeeded.
  await expect(page).toHaveURL(/dashboard/);

  const products = page.locator(".card-body b");
  //wait for at least one product to be visible
  await expect(products.first()).toBeVisible();
  //asteapta pana cand callurile de backend din Network sunt facute
  await page.waitForLoadState("networkidle");
  //creat o constanta in care sunt stocate toate titlurile produselor
  const productTitlesFromThePage = await products.allTextContents();
  //afisarea produselor din pagina
  console.log("The products are:", productTitlesFromThePage);
});

test("UIControls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signInButton = page.locator("#signInBtn");
  const dropDown = page.locator("select.form-control");
  const documentLink = page.locator("[hrf*='documents-request']");
  await userName.fill("ElectricBrother");
  await password.fill("Anaaremere101!");
  await dropDown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(page.locator(".radiotextsty").last().toBeChecked);
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
  //await page.pause();
});

test.only("VerifyChildWindowOpening", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[hrf*='documents-request']");
  documentLink.click();
});
