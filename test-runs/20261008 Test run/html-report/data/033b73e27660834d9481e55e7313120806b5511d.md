# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260921WebAPI_Instructor_Part1.spec.js >> @API Place the order
- Location: PlayWrightAutomation\tests\20260921WebAPI_Instructor_Part1.spec.js:19:1

# Error details

```
Error: Create-order request failed (400): {"message":"Wrong Product ID"}
```

# Test source

```ts
  1  | class APiUtils
  2  | {
  3  | 
  4  |     constructor(apiContext,loginPayLoad)
  5  |     {
  6  |         this.apiContext =apiContext; 
  7  |         this.loginPayLoad = loginPayLoad;
  8  |         
  9  |     }
  10 | 
  11 |     async getToken()
  12 |      {
  13 |         const loginResponse =  await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  14 |         {
  15 |             data:this.loginPayLoad
  16 |          } )//200,201,
  17 |         if (!loginResponse.ok()) {
  18 |             throw new Error(`Login failed (${loginResponse.status()}): ${await loginResponse.text()}`);
  19 |         }
  20 |         const loginResponseJson = await loginResponse.json();
  21 |         const token =loginResponseJson.token;
  22 |         if (!token) {
  23 |             throw new Error(`Login response did not contain a token: ${JSON.stringify(loginResponseJson)}`);
  24 |         }
  25 |         console.log(token);
  26 |         return token;
  27 | 
  28 |     }
  29 | 
  30 |     async createOrder(orderPayLoad)
  31 |     {
  32 |         let response = {};
  33 |        response.token = await this.getToken();
  34 |     const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
  35 |    {
  36 |     data : orderPayLoad,
  37 |     headers:{
  38 |                 'Authorization' :response.token,
  39 |                 'Content-Type'  : 'application/json'
  40 |             },
  41 | 
  42 |    })
  43 |    if (!orderResponse.ok()) {
> 44 |        throw new Error(`Create-order request failed (${orderResponse.status()}): ${await orderResponse.text()}`);
     |              ^ Error: Create-order request failed (400): {"message":"Wrong Product ID"}
  45 |    }
  46 |    const orderResponseJson =await orderResponse.json();
  47 |    console.log(orderResponseJson);
  48 |   if (!Array.isArray(orderResponseJson.orders) || !orderResponseJson.orders[0]) {
  49 |       throw new Error(`Create-order response did not contain an order ID: ${JSON.stringify(orderResponseJson)}`);
  50 |   }
  51 |   const orderId = orderResponseJson.orders[0];
  52 |    response.orderId = orderId;
  53 | 
  54 |    return response;
  55 | }
  56 | 
  57 | 
  58 | 
  59 |     }
  60 | module.exports = {APiUtils};
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
```