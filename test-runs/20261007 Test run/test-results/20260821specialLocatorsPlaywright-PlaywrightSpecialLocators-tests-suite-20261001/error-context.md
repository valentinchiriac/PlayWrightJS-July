# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260821specialLocatorsPlaywright.spec.js >> PlaywrightSpecialLocators
- Location: PlayWrightAutomation\tests\20260821specialLocatorsPlaywright.spec.js:4:1

# Error details

```
TypeError: page.getByText(...).toBeVisible is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e5]:
    - link "ProtoCommerce" [ref=e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "Home" [ref=e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=e10]:
        - link "Shop" [ref=e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=e12]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - heading "Protractor Tutorial" [level=1] [ref=e16]
        - heading "by QAClick Academy" [level=4] [ref=e17]
        - heading "This is a demo eCommerce web appplication developed using Angular 5 to help QAClick Academy students learn Protractor framework for testing Angular applications." [level=5] [ref=e18]
        - heading "Be assured that product you ordered in this site will never arrive, Instead we hope your takeaway will be in learning Protractor!" [level=6] [ref=e19]
      - generic [ref=e21]:
        - link "close" [ref=e22] [cursor=pointer]:
          - /url: "#"
          - text: ×
        - strong [ref=e23]: Success!
        - text: The Form has been submitted successfully!.
      - generic [ref=e24]:
        - generic [ref=e25]:
          - generic [ref=e26]: Name
          - textbox [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]: Email
          - textbox [ref=e30]
        - generic [ref=e31]:
          - generic [ref=e32]: Password
          - textbox "Password" [ref=e33]: Nolan2026
        - generic [ref=e34]:
          - checkbox "Check me out if you Love IceCreams!" [checked] [ref=e35]
          - generic [ref=e36]: Check me out if you Love IceCreams!
        - generic [ref=e37]:
          - generic [ref=e38]: Gender
          - combobox "Gender" [ref=e39]:
            - option "Male"
            - option "Female" [selected]
        - generic [ref=e40]:
          - generic [ref=e41]: "Employment Status:"
          - generic [ref=e42]:
            - radio "Student" [ref=e43]
            - generic [ref=e44]: Student
          - generic [ref=e45]:
            - radio "Employed" [checked] [ref=e46]
            - generic [ref=e47]: Employed
          - generic [ref=e48]:
            - radio "Entrepreneur (disabled)" [disabled] [ref=e49]
            - generic [ref=e50]: Entrepreneur (disabled)
        - generic [ref=e51]:
          - generic [ref=e52]: Date of Birth
          - textbox [ref=e53]
        - button "Submit" [active] [ref=e54] [cursor=pointer]
      - heading "Two-way Data Binding example:" [level=4] [ref=e55]:
        - text: "Two-way Data Binding example:"
        - textbox [ref=e56]
    - contentinfo [ref=e57]:
      - paragraph [ref=e59]: Copyright © ProtoCommerce 2018
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { TIMEOUT } = require("node:dns/promises");
  3  | 
  4  | test("PlaywrightSpecialLocators", async ({ page }) => {
  5  |   await page.goto("https://rahulshettyacademy.com/angularpractice/");
  6  |   //o optiune de locatori specifici pentru playwright (getByLabel)
  7  |   await page.getByLabel("Check me out if you Love IceCreams!").click();
  8  |   //valabil pentru check-boxes
  9  |   await page.getByLabel("Employed").check();
  10 |   await page.getByLabel("Gender").selectOption("Female");
  11 |   await page.getByPlaceholder("Password").fill("Nolan2026");
  12 |   await page.getByRole("button", { name: "Submit" }).click();
  13 |   //default timeout este 5 secunde. daca se doreste suprascrierea wait-ului, se pune timeout: 10_000, valabil doar pt acest pas
  14 |   await expect(
  15 |     page
  16 |       .getByText("Success coaie! The Form has been submitted successfully")
> 17 |       .toBeVisible({ timeout: 10_000 }),
     |        ^ TypeError: page.getByText(...).toBeVisible is not a function
  18 |   );
  19 |   await page.getByRole("link", { name: "Shop" }).click();
  20 |   await page
  21 |     .locator("app-card")
  22 |     .filter({ hasText: "Nokia Edge" })
  23 |     .getByRole("button")
  24 |     .click();
  25 | });
  26 | 
  27 | test("TestingTimeOutsOnTestlevel", async ({ page }) => {
  28 |   //pentru a pune un wait valabil la nivel de test se creaza o noua constanta "slowExpect"
  29 |   const slowExpect = expect.configure({ timeout: 6000 });
  30 |   //noua constanta va inlocui in tot testul "expect"
  31 |   //acest setDefaultTimeout se refera strict la actiunile din test (check, click, fill)
  32 |   page.setDefaultTimeout(9000);
  33 |   await page.goto("https://rahulshettyacademy.com/angularpractice/");
  34 |   //o optiune de locatori specifici pentru playwright (getByLabel)
  35 |   await page.getByLabel("Check me out if you Love IceCreams!").check();
  36 |   //valabil pentru check-boxes
  37 |   await page.getByLabel("Employed").check();
  38 |   await page.getByLabel("Gender").selectOption("Female");
  39 |   await page.getByPlaceholder("Password").fill("Nolan2026");
  40 |   await page.getByRole("button", { name: "Submit" }).click();
  41 |   await slowExpect(
  42 |     page.getByText("Success! The Form has been submitted successfully"),
  43 |   ).toBeVisible();
  44 |   await page.getByRole("link", { name: "Shop" }).click();
  45 |   await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
  46 |   await page
  47 |     .locator("app-card")
  48 |     .filter({ hasText: "Nokia Edge" })
  49 |     .getByRole("button")
  50 |     .click();
  51 | });
  52 | 
```