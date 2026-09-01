import { test, expect } from "@playwright/test";

test("e2eTestWithCodegen", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.locator('form input[name="name"]').click();
  await page.locator('form input[name="name"]').fill("Valentin");
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("valentin@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Anaaremere20!");
  await page
    .getByRole("checkbox", { name: "Check me out if you Love" })
    .check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByRole("radio", { name: "Employed" }).check();
  await page.locator('input[name="bday"]').fill("1991-02-12");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("× Success! The Form has been").click();
  await expect(page.locator("form-comp")).toContainText(
    "× Success! The Form has been submitted successfully!.",
  );
  await expect(page.locator("h1")).toContainText("Protractor Tutorial");
  await expect(page.getByText("Protractor Tutorial by")).toBeVisible();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Blackberry $24.99 Lorem ipsum" })
    .getByRole("button")
    .click();
  await page.getByText("Checkout ( 1 ) (current)").click();
  await expect(page.locator("h4")).toContainText("Blackberry");
  await expect(page.locator("tbody")).toContainText("In Stock");
  await expect(page.locator("#exampleInputEmail1")).toHaveValue("1");
  await expect(page.locator("tbody")).toContainText("₹. 50000");
  await expect(page.locator("tbody")).toContainText("Remove");
  await page.getByRole("button", { name: "Checkout" }).click();
  await page
    .getByRole("textbox", { name: "Please choose your delivery" })
    .click();
  await page
    .getByRole("textbox", { name: "Please choose your delivery" })
    .fill("Iasi, Romania");
  await page.getByText("I agree with the term &").click();
  await page.getByRole("button", { name: "Purchase" }).click();
  await expect(page.locator("app-checkout")).toContainText(
    "× Success! Thank you! Your order will be delivered in next few weeks :-).",
  );
});
