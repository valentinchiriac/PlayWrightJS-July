const { test, expect, request } = require("@playwright/test");
//mai sus am adaugat obiectul 'request' fiindca de el avem nevoie pt a folosi API's in teste
//o constanta (obiect) care sa stocheze 'login-ul'
const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
};
let token;

test.beforeAll(async () => {
  //functia aceasta se executa odata inainte de toate testele din pagina
  const apiContext = await request.newContext();
  //aici cream un "post" comand, ca si cum am folosi Postman
  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad, //aici ar trebui saobtinem un raspuns 200, adica un login reusit, si sa ne dea un token
    },
  );
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  //aici se extrage token-ul din raspunsul de la API si se salveaza in variabila globala 'token'
  token = loginResponseJson.token;
  console.log("The logintoken is:", token);
});
test.beforeEach(() => {
  //functia asta se executa inainte de fiecare test din pagina
});

test("VerifyUserLoginAndGetProducts", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  const email = " ";
  const productName = "ZARA COAT 3";
  await page.goto("https://rahulshettyacademy.com/client");
  const products = page.locator(".card-body b");
  await expect(products.first()).toBeVisible();
  await page.waitForLoadState("networkidle");
  const productTitlesFromThePage = await products.allTextContents();
  console.log("The products are:", productTitlesFromThePage);
});
