const { test, expect } = require("@playwright/test");
let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext(); //create new context for the browser
  const page = await context.newPage(); //create new page in the context
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("toader.chiriac@gmail.com");
  await page.locator("#userPassword").fill("Anaaremere1!");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await context.storageState({ path: "state.json" }); //save the state of the browser after login
  await browser.newContext({ storageState: "state.json" }); //create new context with the saved state
  webContext = await browser.newContext({ storageState: "state.json" }); //create new context with the saved state
});

test.only("Client app login", async () => {
  const email = "";
  const productName = "Zara Coat 4";
  const newPage = await webContext.newPage(); //create new page in the context
  await newPage.goto("https://rahulshettyacademy.com/client");
  const products = newPage.locator(".card-body");

  const titles = await newPage.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await newPage.locator("[routerlink*='cart']").click();
  await newPage.locator("div li").first().waitFor();
  const bool = await newPage.locator("h3:has-text('Zara Coat 3')").isVisible();
  expect(bool).toBeTruthy();
  await newPage.locator("text=Checkout").click();
  await newPage
    .locator("[placeholder*='Country']")
    .pressSequentially("ind", { delay: 100 });
});
