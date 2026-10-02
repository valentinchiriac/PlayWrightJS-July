import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await expect(page.locator("h1")).toContainText("Protractor Tutorial");
  await expect(page.locator("h5")).toContainText(
    "This is a demo eCommerce web appplication developed using Angular 5 to help QAClick Academy students learn Protractor framework for testing Angular applications.",
  );
  await expect(page.locator("h6")).toContainText(
    "Be assured that product you ordered in this site will never arrive, Instead we hope your takeaway will be in learning Protractor!",
  );
  await expect(page.locator("form")).toContainText("Name");
  await expect(page.locator("form")).toContainText("Email");
  await expect(page.locator("form")).toContainText("Password");
  await expect(page.locator("form")).toContainText(
    "Check me out if you Love IceCreams!",
  );
  await expect(
    page.getByRole("checkbox", { name: "Check me out if you Love" }),
  ).toBeVisible();
  await expect(page.getByRole("radio", { name: "Student" })).toBeVisible();
  await expect(page.getByRole("radio", { name: "Employed" })).toBeVisible();
  await expect(page.getByText("Entrepreneur (disabled)")).toBeVisible();
  await page.locator('form input[name="name"]').click();
  await page.locator('form input[name="name"]').fill("Toader");
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("asdf@jdskvj.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("fbkadlfk(&^(&86986");
  await page
    .getByRole("checkbox", { name: "Check me out if you Love" })
    .check();
  await page.getByRole("radio", { name: "Student" }).check();
  await page.locator('input[name="bday"]').fill("2026-08-04");
});
