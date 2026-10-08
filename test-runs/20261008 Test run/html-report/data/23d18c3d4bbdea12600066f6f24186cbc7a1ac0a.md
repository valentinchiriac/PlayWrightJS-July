# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260810LoginPractice.spec.js >> UIControls
- Location: PlayWrightAutomation\tests\20260810LoginPractice.spec.js:24:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('[hrf*=\'documents-request\']')
Expected: "blinkingText"
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" with timeout 30000ms
  - waiting for locator('[hrf*=\'documents-request\']')
  - Test timeout of 20000ms exceeded.

```

```yaml
- link "Free Access to InterviewQues/ResumeAssistance/Material":
  - /url: https://rahulshettyacademy.com/documents-request
- link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
  - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
- heading [level=3]:
  - img
- text: "Username:"
- textbox "Username:": ElectricBrother
- text: "Password:"
- textbox "Password:": Anaaremere101!
- text: Admin
- radio "Admin"
- text: User
- radio "User" [checked]
- combobox:
  - option "Student"
  - option "Teacher"
  - option "Consultant" [selected]
- checkbox "I Agree to the terms and conditions"
- text: I Agree to the
- link "terms and conditions":
  - /url: "#"
- button "Sign In"
- paragraph: (username is rahulshettyacademy and Password is Learning@830$3mK2)
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { text } = require("node:stream/consumers");
  3  | 
  4  | test("VerifyUserLoginAndGetProducts", async ({ page }) => {
  5  |   await page.goto("https://rahulshettyacademy.com/client");
  6  |   await page.locator("#userEmail").fill("toader.chiriac@gmail.com");
  7  |   await page.locator("#userPassword").fill("Anaaremere1!");
  8  |   await page.locator("[value='Login']").click();
  9  | 
  10 |   // Confirm that login succeeded.
  11 |   await expect(page).toHaveURL(/dashboard/);
  12 | 
  13 |   const products = page.locator(".card-body b");
  14 |   //wait for at least one product to be visible
  15 |   await expect(products.first()).toBeVisible();
  16 |   //asteapta pana cand callurile de backend din Network sunt facute
  17 |   await page.waitForLoadState("networkidle");
  18 |   //creat o constanta in care sunt stocate toate titlurile produselor
  19 |   const productTitlesFromThePage = await products.allTextContents();
  20 |   //afisarea produselor din pagina
  21 |   console.log("The products are:", productTitlesFromThePage);
  22 | });
  23 | 
  24 | test("UIControls", async ({ page }) => {
  25 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  26 |   const userName = page.locator("#username");
  27 |   const password = page.locator("#password");
  28 |   const signInButton = page.locator("#signInBtn");
  29 |   const dropDown = page.locator("select.form-control");
  30 |   const documentLink = page.locator("[hrf*='documents-request']");
  31 |   await userName.fill("ElectricBrother");
  32 |   await password.fill("Anaaremere101!");
  33 |   await dropDown.selectOption("consult");
  34 |   await page.locator(".radiotextsty").last().click();
  35 |   await page.locator("#okayBtn").click();
  36 |   console.log(page.locator(".radiotextsty").last().toBeChecked);
  37 |   await expect(page.locator(".radiotextsty").last()).toBeChecked();
  38 |   await page.locator("#terms").click();
  39 |   await expect(page.locator("#terms")).toBeChecked();
  40 |   await page.locator("#terms").uncheck();
  41 |   expect(await page.locator("#terms").isChecked()).toBeFalsy();
> 42 |   await expect(documentLink).toHaveAttribute("class", "blinkingText");
     |                              ^ Error: expect(locator).toHaveAttribute(expected) failed
  43 | });
  44 | 
  45 | test("VerifyChildWindowOpening", async ({ browser }) => {
  46 |   const context = await browser.newContext();
  47 |   const page = await context.newPage();
  48 |   const userName = page.locator("#username");
  49 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  50 |   //cand se apasa linkul din locator, o noua pagina se va deschide
  51 |   const documentLinkPage = page.locator("[href*='documents-request']");
  52 |   const [newPage] = await Promise.all(
  53 |     //tot ce este intre parantezele 'promisiunii' trebuie sa fie indeplinite ca sa treaca mai departe
  54 |     //in 'contextul' testului de fata, se deschide o noua pagina (tab) care va fi inclusa in acest test
  55 |     [context.waitForEvent("page"), documentLinkPage.click()], //pagina noua se deschide,
  56 |   );
  57 |   const text = await newPage.locator(".red").textContent();
  58 |   //se creaza un text ce este separat din textul principal (de la simbolul '@' la simbolul ' ')
  59 |   const arrayText = text.split("@");
  60 |   const domain = arrayText[1].split(" ")[0];
  61 |   console.log(domain);
  62 |   page.locator("#username").type(domain);
  63 |   console.log(await page.locator("#username").inputValue());
  64 | });
  65 | 
```