const { test, expect } = require("@playwright/test");

test.only("Verify correct message displayed when incorrect login credentials inserted", async ({
  browser,
}) => {
  //chrome - plugins / cookies
  const context = await browser.newContext();
  //context aduce informatii cache-uite sau detalii de login
  //BrowserContexts provide a way to operate multiple independent browser sessions.
  const page = await context.newPage();
  page.route("**/*.css", (route) => route.abort()); //this is used to intercept the CSS requests and abort them, which speeds up the test execution time
  page.on("request", (request) => console.log(request.url()));
  page.on("response", (response) =>
    console.log(response.url(), response.status()),
  ); //this is used to log the request and response URLs and status codes to the console, which can be useful for debugging
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //using a selector to identify elements on the page
  //CSS locator
  await page.getByRole("textbox", { name: "Username:" }).click();
  await page.getByRole("textbox", { name: "Username:" }).fill("Valentin");
  await page.getByRole("textbox", { name: "Password:" }).click();
  await page.getByRole("textbox", { name: "Password:" }).fill("OperaNoua101!");
  await page.getByRole("combobox").selectOption("teach");
  await page
    .getByRole("checkbox", { name: "I Agree to the terms and" })
    .check();
  await page.getByRole("button", { name: "Sign In" }).click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText(
    "Incorrect username/password.",
  );
});

test("Verify correct login credentials inserted and user redirected", async ({
  browser,
}) => {
  //chrome - plugins / cookies
  const context = await browser.newContext();
  //context aduce informatii cache-uite sau detalii de login
  //BrowserContexts provide a way to operate multiple independent browser sessions.
  const page = await context.newPage();
  page.route("**/*.{png,jpg,jpeg}", (route) => route.abort()); //this is used to intercept the PNG, JPG and JPEG requests and abort them, which speeds up the test execution time
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //am creat o constanta in care am pus locatorul produselor din pagina
  const cardTitles = page.locator(".card-body a");
  //using a selector to identify elements on the page
  //CSS locator
  await page.getByRole("textbox", { name: "Username:" }).click();
  await page
    .getByRole("textbox", { name: "Username:" })
    .fill("rahulshettyacademy");
  await page.getByRole("textbox", { name: "Password:" }).click();
  await page
    .getByRole("textbox", { name: "Password:" })
    .fill("Learning@830$3mK2");
  await page.getByRole("combobox").selectOption("teach");
  await page
    .getByRole("checkbox", { name: "I Agree to the terms and" })
    .check();
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page).toHaveURL(
    "https://rahulshettyacademy.com/angularpractice/shop",
  );
  console.log(await page.locator(".card-body a").nth(0).textContent());
  //verifica daca numele produselor este corect
  await expect(cardTitles.nth(0)).toContainText(/iphone/);
  await expect(cardTitles.nth(1)).toContainText(/Samsung/);
  await expect(cardTitles.nth(2)).toContainText(/Nokia/);
  await expect(cardTitles.nth(3)).toContainText(/Blackberry/);
  await page.pause();
  //constanta pentru stocarea tuturor titlurilor
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test("Page playwright test", async ({ page }) => {
  await page.goto("https://google.com");
  //get title - assertion (expect that...)
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
