const { test, expect } = require("@playwright/test");
const path = require("path");

const baseUrl = "https://rahulshettyacademy.com/client";
const authStatePath = path.join(__dirname, "..", "state.json");
const productName = "Zara";

let webContext;

test.beforeAll(async ({ browser }) => {
  const loginContext = await browser.newContext();

  try {
    const page = await loginContext.newPage();

    await page.goto(baseUrl);
    await page.locator("#userEmail").fill("toader.chiriac@gmail.com");
    await page.locator("#userPassword").fill("Anaaremere1!");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".card-body b").first()).toBeVisible();

    await loginContext.storageState({ path: authStatePath });
  } finally {
    await loginContext.close();
  }

  webContext = await browser.newContext({ storageState: authStatePath });
});

test.afterAll(async () => {
  await webContext?.close();
});

test("Client app login", async () => {
  const page = await webContext.newPage();

  try {
    await page.goto(baseUrl);

    const products = page.locator(".card-body");
    await page.locator(".card-body b").first().waitFor();

    let productFound = false;
    const count = await products.count();

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      const title = (await product.locator("b").innerText()).trim();

      if (title.toLowerCase().includes(productName.toLowerCase())) {
        await product.locator("text= Add To Cart").click();
        productFound = true;
        break;
      }
    }

    expect(productFound).toBeTruthy();

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    await expect(page.locator("h3", { hasText: productName })).toBeVisible();

    await page.getByText("Checkout", { exact: true }).click();
    await page
      .locator("[placeholder*='Country']")
      .pressSequentially("ind", { delay: 100 });

    const dropdown = page.locator(".ta-results");
    await expect(dropdown).toBeVisible();

    const indiaOption = dropdown.getByText("India", { exact: true });
    await expect(indiaOption).toBeVisible();
    await indiaOption.scrollIntoViewIfNeeded();
    await indiaOption.click();
  } finally {
    await page.close();
  }
});
