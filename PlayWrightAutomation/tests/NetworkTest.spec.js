const { test, expect, request } = require("@playwright/test");
const { APiUtils } = require("./utils/APiUtils");
const loginPayLoad = {
  userEmail: "toader.chiriac@gmail.com",
  userPassword: "Anaaremere1!",
};
const orderPayLoad = {
  orders: [{ country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8" }],
};
const fakePayLoad = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
  const apiContext = await request.newContext(); //this is used to create a new API context for making HTTP requests
  const apiUtils = new APiUtils(apiContext, loginPayLoad); // this is used to create a new instance of the APiUtils class, passing in the apiContext and loginPayLoad as parameters
  response = await apiUtils.createOrder(orderPayLoad); //this is used to call the createOrder method of the apiUtils instance, passing in the orderPayLoad as a parameter, and storing the response in the response variable
});

//create order successfully
test("@API Place the order", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a733c2285b8849b492f372d",
    async (route) => {
      //intercepting response - API response ->{insert fake response here}-> browser -> render data on frontend {test what the faked response is supposed to do}
      const response = await page.request.fetch(route.request()); //this gets the original request and sends it to the server
      let body = JSON.stringify(fakePayLoad); //this is the fake response that we want to inject into the browser
      route.fulfill({
        response,
        body,
      });
    },
  ); //this is the url where we want to inject a response we want but we only replace the body

  await page.locator("button[routerlink*='myorders']").click(); // click on the "My Orders" button to navigate to the orders page
  await page.pause();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr"); //get all the rows in the orders table
});
