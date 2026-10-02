const { test, expect } = require("@playwright/test");
const { text } = require("node:stream/consumers");

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
});

test("VerifyChildWindowOpening", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //cand se apasa linkul din locator, o noua pagina se va deschide
  const documentLinkPage = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all(
    //tot ce este intre parantezele 'promisiunii' trebuie sa fie indeplinite ca sa treaca mai departe
    //in 'contextul' testului de fata, se deschide o noua pagina (tab) care va fi inclusa in acest test
    [context.waitForEvent("page"), documentLinkPage.click()], //pagina noua se deschide,
  );
  const text = await newPage.locator(".red").textContent();
  //se creaza un text ce este separat din textul principal (de la simbolul '@' la simbolul ' ')
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  page.locator("#username").type(domain);
  console.log(await page.locator("#username").inputValue());
});
