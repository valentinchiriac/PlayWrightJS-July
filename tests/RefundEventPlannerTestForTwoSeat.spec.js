import { test, expect } from "@playwright/test";

test("VerifyLoginAndBookTwoSeatsAtEventAndCancelBookingandCheckNonRefund", async ({
  page,
}) => {
  async function login(page) {
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("valentin@shetty.com");
    await page.getByLabel("password").fill("AnaAreMere205!");
    await page.locator("#login-btn").click();
  }
  await login(page);
  const eventCard = page
    .getByTestId("event-card")
    .filter({ has: page.getByRole("heading", { name: "Dilli Diwali Mela" }) });
  await eventCard.getByTestId("book-now-btn").click();
  await page.getByRole("button", { name: "+" }).dblclick();
  await page.getByRole("textbox", { name: "Full Name*" }).click();
  await page.getByRole("textbox", { name: "Full Name*" }).fill("Lugojana");
  await page.getByRole("textbox", { name: "Full Name*" }).press("Tab");
  await page.getByTestId("customer-email").fill("valentin@shetty.com");
  await page.getByRole("textbox", { name: "Phone Number*" }).click();
  await page
    .getByRole("textbox", { name: "Phone Number*" })
    .fill("313546513215");
  await page.getByRole("button", { name: "Confirm Booking" }).click();
  await page.getByRole("button", { name: "View My Bookings" }).click();
  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/bookings",
  );
  await expect(page.getByRole("main")).toMatchAriaSnapshot(
    `- button "View Details"`,
  );
  const orderId = await page.getByTestId("booking-card").nth(0).textContent();
  const eventName = await page
    .locator("h3")
    .filter({ hasText: "Dilli Diwali Mela" })
    .first()
    .textContent();
  const orderIdFirstLetter = orderId.trim()[0];
  const eventNameFirstLetter = eventName.trim()[0];
  console.log("the letters are: ", orderIdFirstLetter, eventNameFirstLetter);
  expect(orderIdFirstLetter).toBe(eventNameFirstLetter);

  await page.getByTestId("nav-bookings").click();
  await page.getByRole("button", { name: "View Details" }).first().click();
  await page.getByTestId("check-refund-btn").click();
  await expect(page.getByTestId("refund-result")).toBeVisible();
  await expect(page.getByTestId("refund-result")).toContainText(
    "Not eligible for refund. Group bookings (3 tickets) are non-refundable.",
  );
});
