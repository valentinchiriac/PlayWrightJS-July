# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260831e2e_codegen_purchase.spec.js >> e2eTestWithCodegen
- Location: PlayWrightAutomation\tests\20260831e2e_codegen_purchase.spec.js:3:5

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.click: Test timeout of 20000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Purchase' })
    - locator resolved to <input type="submit" value="Purchase" class="btn btn-success btn-lg"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="overlay nsm-overlay-open">↵    </div> from <ngx-smart-modal identifier="myModal">…</ngx-smart-modal> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="overlay nsm-overlay-open">↵    </div> from <ngx-smart-modal identifier="myModal">…</ngx-smart-modal> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    32 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="overlay nsm-overlay-open">↵    </div> from <ngx-smart-modal identifier="myModal">…</ngx-smart-modal> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - navigation [ref=f1e5]:
    - link "ProtoCommerce" [ref=f1e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=f1e7]:
      - listitem [ref=f1e8]:
        - link "Home" [ref=f1e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=f1e10]:
        - link "Shop" [ref=f1e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=f1e12]:
    - navigation [ref=f1e13]:
      - generic [ref=f1e14]:
        - link "ProtoCommerce Home" [ref=f1e15] [cursor=pointer]:
          - /url: "#"
        - list [ref=f1e17]:
          - listitem [ref=f1e18]:
            - generic [ref=f1e19] [cursor=pointer]:
              - text: Checkout ( 1 )
              - generic [ref=f1e20]: (current)
    - generic [ref=f1e23]:
      - generic [ref=f1e24]:
        - generic [ref=f1e25]: Please choose your delivery location. Then click on purchase button
        - textbox "Please choose your delivery location. Then click on purchase button" [ref=f1e26]: Iasi, Romania
      - generic [ref=f1e27]:
        - checkbox "I agree with the term & Conditions " [checked] [active] [ref=f1e28]
        - generic [ref=f1e29] [cursor=pointer]: I agree with the term & Conditions 
      - button "Purchase" [ref=f1e31] [cursor=pointer]
      - generic [ref=f1e34]:
        - heading "Terms And Conditions" [level=1] [ref=f1e35]
        - paragraph [ref=f1e36]: Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and Business Standard Private Limited.
        - button "Close" [ref=f1e37] [cursor=pointer]
        - button "Close" [ref=f1e38] [cursor=pointer]
    - contentinfo [ref=f1e40]:
      - paragraph [ref=f1e42]: Copyright © ProtoCommerce 2018
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("e2eTestWithCodegen", async ({ page }) => {
  4  |   await page.goto("https://rahulshettyacademy.com/angularpractice/");
  5  |   await page.locator('form input[name="name"]').click();
  6  |   await page.locator('form input[name="name"]').fill("Valentin");
  7  |   await page.locator('input[name="email"]').click();
  8  |   await page.locator('input[name="email"]').fill("valentin@gmail.com");
  9  |   await page.getByRole("textbox", { name: "Password" }).click();
  10 |   await page.getByRole("textbox", { name: "Password" }).fill("Anaaremere20!");
  11 |   await page
  12 |     .getByRole("checkbox", { name: "Check me out if you Love" })
  13 |     .check();
  14 |   await page.getByLabel("Gender").selectOption("Female");
  15 |   await page.getByRole("radio", { name: "Employed" }).check();
  16 |   await page.locator('input[name="bday"]').fill("1991-02-12");
  17 |   await page.getByRole("button", { name: "Submit" }).click();
  18 |   await page.getByText("× Success! The Form has been").click();
  19 |   await expect(page.locator("form-comp")).toContainText(
  20 |     "× Success! The Form has been submitted successfully!.",
  21 |   );
  22 |   await expect(page.locator("h1")).toContainText("Protractor Tutorial");
  23 |   await expect(page.getByText("Protractor Tutorial by")).toBeVisible();
  24 |   await page.getByRole("button", { name: "Submit" }).click();
  25 |   await page.getByRole("link", { name: "Shop" }).click();
  26 |   await page
  27 |     .locator("app-card")
  28 |     .filter({ hasText: "Blackberry $24.99 Lorem ipsum" })
  29 |     .getByRole("button")
  30 |     .click();
  31 |   await page.getByText("Checkout ( 1 ) (current)").click();
  32 |   await expect(page.locator("h4")).toContainText("Blackberry");
  33 |   await expect(page.locator("tbody")).toContainText("In Stock");
  34 |   await expect(page.locator("#exampleInputEmail1")).toHaveValue("1");
  35 |   await expect(page.locator("tbody")).toContainText("₹. 50000");
  36 |   await expect(page.locator("tbody")).toContainText("Remove");
  37 |   await page.getByRole("button", { name: "Checkout" }).click();
  38 |   await page
  39 |     .getByRole("textbox", { name: "Please choose your delivery" })
  40 |     .click();
  41 |   await page
  42 |     .getByRole("textbox", { name: "Please choose your delivery" })
  43 |     .fill("Iasi, Romania");
  44 |   await page.getByText("I agree with the term &").click();
> 45 |   await page.getByRole("button", { name: "Purchase" }).click();
     |                                                        ^ Error: locator.click: Test timeout of 20000ms exceeded.
  46 |   await expect(page.locator("app-checkout")).toContainText(
  47 |     "× Success! Thank you! Your order will be delivered in next few weeks :-).",
  48 |   );
  49 | });
  50 | 
```