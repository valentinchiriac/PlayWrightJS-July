const { test, expect } = require("@playwright/test");
const { text } = require("node:stream/consumers");

test("VerifyUserLoginAndAddProductsToCart", async ({ page }) => {
  const productName = "ZARA COAT 3";
  const email = "toader.chiriac@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Anaaremere1!");
  await page.locator("[value='Login']").click();

  // Confirm that login succeeded.
  await expect(page).toHaveURL(/dashboard/);

  const products = page.locator(".card-body");
  //wait for at least one product to be visible
  await expect(products.first()).toBeVisible();
  //asteapta pana cand callurile de backend din Network sunt facute
  await page.waitForLoadState("networkidle");
  //creat o constanta in care sunt stocate toate titlurile produselor
  await page.locator(".card-body b").first().waitFor();
  const productTitlesFromThePage = await page
    .locator(".card-body b")
    .allTextContents();
  //afisarea produselor din pagina
  console.log("The products are:", productTitlesFromThePage);
  //ia toate produsele intr-un array si itereaza prin ele
  const countProducts = await products.count();
  for (let i = 0; i < countProducts; ++i) {
    //itereaza prin numele produselor din pagina si cand gaseste produsul dorit "product name"
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      //add product to cart
      await products.nth(i).locator("text = Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink='/dashboard/cart']").click();
  await page.locator("div li").first().waitFor();
  const isProductPresent = await page
    .locator("h3:has-text('ZARA COAT 3')")
    .isVisible();
  await expect(isProductPresent).toBeTruthy();
  await page.locator("text=Checkout").click();
  //aici folosim pressSequentially pentru a tasta literele una cate una pt ca Paste nu functioneaza
  await page
    .locator("[placeholder*='Country']")
    .pressSequentially("roma", { delay: 150 });
  const countryOptions = await page.locator(".ta-results");
  // await expect(countryOptions).toBeVisible();
  // await countryOptions
  //   .getByRole("button", { name: "Oman", exact: true })
  //   .click();

  // await expect(countryOptions).toBeHidden();
  await countryOptions.waitFor();
  countryOptions.locator("button").count();
  for (let i = 0; i < countryOptions; i++) {
    const text = await countryOptions.locator("button").nth(i).textContent();
    if (text === "Romania") {
      await countryOptions.locator("button").nth(i).click();
      break;
    }
  }
  //urmatorul pas verifica daca adresa de email este cea introdusa la login de utilizator
  await expect(page.locator(".user__name [type='text']").first()).toHaveText(
    email,
  );
  const placeOrderBtn = page.locator(".action__submit");

  console.log("visible:", await placeOrderBtn.isVisible());
  console.log("enabled:", await placeOrderBtn.isEnabled());
  await placeOrderBtn.click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. ",
  );
  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderId);
});
