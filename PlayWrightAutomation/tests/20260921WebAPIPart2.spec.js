const { test, expect } = require("@playwright/test");
const path = require("path");

const baseUrl = "https://rahulshettyacademy.com/client";
const authStatePath = path.join(__dirname, "..", "state.json");
const productName = "Zara";

let webContext;

async function checkOrderId(page, orderId) {
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = page.locator("tbody tr");
  let orderFound = false;

  for (let i = 0; i < (await rows.count()); i++) {
    const rowOrderId = (await rows.nth(i).locator("th").textContent()).trim();

    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      orderFound = true;
      break;
    }
  }
  console.log("the order found is " + orderFound);

  expect(orderFound).toBeTruthy();

  const displayedOrderId = (
    await page.locator(".col-text").textContent()
  ).trim();
  expect(orderId).toContain(displayedOrderId);
}

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

    await loginContext.storageState({ path: authStatePath }); // Save the authentication state to a file
  } finally {
    await loginContext.close();
  }

  webContext = await browser.newContext({ storageState: authStatePath });
});

test.afterAll(async () => {
  await webContext?.close(); // Close the web context after all tests are done
});

test("Login and Add Product to Cart", async () => {
  const page = await webContext.newPage();

  try {
    await page.goto(baseUrl); // Navigate to the base URL

    const products = page.locator(".card-body");
    await page.locator(".card-body b").first().waitFor();

    let productFound = false;
    const count = await products.count();
    console.log("the count is " + count);

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      const title = (await product.locator("b").innerText()).trim();
      console.log("the title is " + title);

      if (title.toLowerCase().includes(productName.toLowerCase())) {
        await product.locator("text= Add To Cart").click();
        productFound = true;
        break;
      }
    }

    expect(productFound).toBeTruthy();

    await page.locator("[routerlink*='cart']").click(); // Click on the cart link
    await page.locator("div li").first().waitFor(); // Wait for the first item in the cart to be visible
    await expect(page.locator("h3", { hasText: productName })).toBeVisible(); // Verify that the product is in the cart

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

    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toContainText(
      "Thankyou for the order",
    );

    const orderId = (
      await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    ).trim();
    await checkOrderId(page, orderId);
    console.log("the order id is " + orderId);
  } finally {
    await page.close();
  }
});
