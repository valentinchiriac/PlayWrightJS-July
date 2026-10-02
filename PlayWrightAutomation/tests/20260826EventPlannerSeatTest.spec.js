import { test, expect } from "@playwright/test";

test("VerifyLoginAndBookASeatAtEvent", async ({ page }) => {
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("valentin@shetty.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("AnaAreMere205!");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByTestId("register-email").click();
  await page.getByTestId("register-email").fill("valentin@shetty.com");
  await page.getByTestId("register-email").press("Tab");
  await page.getByTestId("register-password").fill("AnaAreMere205!");
  await page.getByRole("textbox", { name: "Repeat your password" }).click();
  await page
    .getByRole("textbox", { name: "Repeat your password" })
    .fill("AnaAreMere205!");
  await page.getByTestId("register-btn").click();
  await expect(
    page.getByRole("button", { name: "Explore All Events" }),
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText(
    "Ready to experience something new?",
  );
  await page.getByRole("button", { name: "Explore All Events" }).click();
  await expect(
    page.getByRole("button", { name: "Add New Event" }),
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText("Add New Event");
  await page.getByRole("button", { name: "Add New Event" }).click();
  await page.getByTestId("event-title-input").click();
  await page
    .getByTestId("event-title-input")
    .fill("Curs Escalada Cheile Bicaz");
  await page.getByRole("textbox", { name: "Describe the event…" }).click();
  await page
    .getByRole("textbox", { name: "Describe the event…" })
    .fill("Catarare pana la moarte si dincolo de ea");
  await page.getByLabel("Category*").selectOption("Sports");
  await page.getByRole("textbox", { name: "City*" }).click();
  await page.getByRole("textbox", { name: "City*" }).fill("Westworld");
  await page.getByRole("textbox", { name: "Venue*" }).click();
  await page.getByRole("textbox", { name: "Venue*" }).fill("tripme");
  await page.getByTestId("add-event-btn").click();
  await expect(page.getByTestId("admin-event-form")).toContainText(
    "Event date is required",
  );
  await expect(page.getByTestId("admin-event-form")).toContainText(
    "Enter a valid price (≥ 0)",
  );
  await expect(page.getByTestId("admin-event-form")).toContainText(
    "Must have at least 1 seat",
  );
  await expect(page.getByTestId("admin-event-form")).toContainText("Venue*");
  await page
    .getByRole("textbox", { name: "Event Date & Time*" })
    .fill("2026-08-28T02:25");
  await page.getByRole("spinbutton", { name: "Price ($)*" }).click();
  await page.getByRole("spinbutton", { name: "Price ($)*" }).fill("235");
  await page.getByRole("spinbutton", { name: "Total Seats*" }).click();
  await page.getByRole("spinbutton", { name: "Total Seats*" }).fill("200");
  await page.getByTestId("add-event-btn").click();
  await expect(page.getByText("You can add up to 6 events.")).toBeVisible();
  await page.getByRole("link", { name: "EventHub" }).click();
  await expect(page.locator(".absolute.inset-0.flex")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Curs Escalada Cheile Bicaz" }),
  ).toBeVisible();
  await expect(page.getByText("seats available")).toBeVisible();
  await expect(page.getByText("200 seats available")).toBeTruthy();
  await page
    .getByRole("article")
    .filter({ hasText: "SportsCurs Escalada Cheile" })
    .getByTestId("book-now-btn")
    .click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("textbox", { name: "Full Name*" }).click();
  await page.getByRole("textbox", { name: "Full Name*" }).fill("Gica");
  await page.getByRole("textbox", { name: "Full Name*" }).press("Tab");
  await page.getByTestId("customer-email").fill("gica@petrescu.com");
  await page.getByRole("textbox", { name: "Phone Number*" }).click();
  await page.getByRole("textbox", { name: "Phone Number*" }).fill("3216546446");
  const ticketPrice = page
    .getByText("Book Tickets")
    .locator("..")
    .locator("span");
  const ticketPriceValue = await ticketPrice.textContent();
  console.log("Ticket price:", ticketPriceValue);
  const currentBookingPrice = page.getByText("$235", { exact: true }).last();
  const currentBookingPriceText = await currentBookingPrice.textContent();
  console.log("Booking price:", currentBookingPriceText);
  expect(currentBookingPriceText).toBe(ticketPriceValue);
  await page.getByRole("button", { name: "Confirm Booking" }).click();
  await expect(
    page.getByRole("heading", { name: "Booking Confirmed! 🎉" }),
  ).toBeVisible();
  const eventsLink = await page
    .locator("a")
    .filter({ hasText: "Events" })
    .first();
  await eventsLink.click();
  await expect(page.getByText("199 / 200 seats", { exact: true })).toBeTruthy();
});
