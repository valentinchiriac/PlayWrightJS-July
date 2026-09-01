const { test, expect } = require("@playwright/test");

async function login(page) {
  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page
    .getByPlaceholder("you@email.com")
    .fill("shivamtodannkar@gmail.com");
  await page.getByLabel("password").fill("Shivam@123");
  await page.locator("#login-btn").click();
  await page.getByRole("link", { name: "Browse Events" }).isVisible();
}

function futureDateValue() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date.toISOString().slice(0, 16);
}

test("eventhubflow", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await login(page);

  await page.getByRole("button", { name: "Admin" }).click();
  await page.locator("[href='/admin/events']").nth(0).click();
  const EventName = `Test Event Car Expo ${Date.now()}`;
  await page.locator("#event-title-input").fill(EventName);
  await page.locator("#admin-event-form textarea").fill("Car Expo");
  await page.getByLabel("City").fill("Mumbai");
  await page.getByLabel("Venue").fill("Vankhade Stadium");
  await page.getByLabel("Event Date & Time").fill(futureDateValue());
  await page.getByLabel("Price ($)").fill("1500");
  await page.getByLabel("Total Seats").fill("150");
  await page.locator("#add-event-btn").click();
  await expect(page.getByText("Event created!")).toBeVisible();

  await page.locator("#nav-events").click();
  await page.locator("[data-testid='event-card']").first().waitFor();
  const eventCards = page.locator("[data-testid='event-card']");
  await expect(eventCards.first()).toBeVisible();
  const matchedCard = eventCards.filter({ hasText: EventName });
  await expect(matchedCard).toBeVisible({ timeout: 5000 });
  const seatText = await matchedCard.getByText(/seat/i).innerText();
  const seatsBeforeBooking = parseInt(seatText.match(/\d+/)[0]);
  console.log("Event Title:", EventName);
  console.log("Seats Before Booking:", seatsBeforeBooking);

  await matchedCard.getByTestId("book-now-btn").click();
  await expect(page.locator("#ticket-count")).toHaveText("1");
  await page.getByLabel("Full Name").fill("Shivam Todankar");
  await page.locator("#customer-email").fill("shivamtodankar@gmail.com");
  await page.getByPlaceholder("+91 98765 43210").fill("+91 98765 10000");
  await page.locator(".confirm-booking-btn").click();

  const bookingRefElement = page.locator(".booking-ref").first();
  await expect(bookingRefElement).toBeVisible();
  const bookingRef = (await bookingRefElement.innerText()).trim();
  console.log("Booking Reference:", bookingRef);

  await page.getByRole("link", { name: "View My Bookings" }).click();
  await expect(page).toHaveURL(
    "https://eventhub.rahulshettyacademy.com/bookings",
  );
  const bookingCards = page.locator("#booking-card");
  await expect(bookingCards.first()).toBeVisible();
  const matchedBookingCard = bookingCards.filter({
    has: page.locator(".booking-ref").filter({ hasText: bookingRef }),
  });
  await expect(matchedBookingCard).toBeVisible();
  await expect(matchedBookingCard).toContainText(EventName);

  await page.goto("https://eventhub.rahulshettyacademy.com/events");
  const eventCardsAfterBooking = page.getByTestId("event-card");
  await expect(eventCardsAfterBooking.first()).toBeVisible();
  const matchedEventCardAfterBooking = eventCardsAfterBooking.filter({
    hasText: EventName,
  });
  await expect(matchedEventCardAfterBooking).toBeVisible();
  const seatTextAfterBooking = await matchedEventCardAfterBooking
    .getByText(/seat/i)
    .innerText();
  const seatsAfterBooking = parseInt(seatTextAfterBooking.match(/\d+/)[0]);
  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
});
