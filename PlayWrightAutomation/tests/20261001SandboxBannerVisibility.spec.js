import { test, expect } from "@playwright/test";

const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const USER = {
  email: "valentin@shetty.com",
  password: "AnaAreMere205!",
};
const SIX_EVENTS_RESPONSE = {
  data: [
    {
      id: 1,
      title: "DevTalks",
      category: "Conference",
      eventDate: "2025-06-01T10:00:00.000Z",
      venue: "Agora",
      city: "Iasi",
      price: "999",
      totalSeats: 200,
      availableSeats: 150,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 2,
      title: "Rock Night Live",
      category: "Concert",
      eventDate: "2025-06-05T18:00:00.000Z",
      venue: "Palace Grounds",
      city: "Iasi",
      price: "1500",
      totalSeats: 500,
      availableSeats: 300,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 3,
      title: "Weekendul Carabelor Deschise",
      category: "Sports",
      eventDate: "2025-06-10T19:30:00.000Z",
      venue: "Lacu Rosu",
      city: "Cheile Bicaz",
      price: "2000",
      totalSeats: 58,
      availableSeats: 50,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 4,
      title: "UX Design Workshop",
      category: "Workshop",
      eventDate: "2025-06-15T09:00:00.000Z",
      venue: "WeWork",
      city: "Podu Iloaiei",
      price: "500",
      totalSeats: 50,
      availableSeats: 20,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 5,
      title: "Lollapalooza India",
      category: "Festival",
      eventDate: "2025-06-20T12:00:00.000Z",
      venue: "Mahalaxmi Racecourse",
      city: "Mumbai",
      price: "3000",
      totalSeats: 5000,
      availableSeats: 2000,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 6,
      title: "Open Structural",
      category: "Sport Contest",
      eventDate: "2025-06-25T10:00:00.000Z",
      venue: "Climb Again Chisinaului",
      city: "Iasi",
      price: "750",
      totalSeats: 300,
      availableSeats: 180,
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isStatic: false,
    },
  ],
  pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
};

const FOUR_EVENTS_RESPONSE = {
  data: [
    {
      id: 1,
      title: "DevTalks",
      category: "Conference",
      eventDate: "2025-06-01T10:00:00.000Z",
      venue: "Agora",
      city: "Iasi",
      price: "999",
      totalSeats: 200,
      availableSeats: 150,
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isStatic: false,
    },
    {
      id: 2,
      title: "Rock Night Live",
      category: "Concert",
      eventDate: "2025-06-05T18:00:00.000Z",
      venue: "Palace Grounds",
      city: "Iasi",
      price: "1500",
      totalSeats: 500,
      availableSeats: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isStatic: false,
    },
    {
      id: 3,
      title: "Weekendul Carabelor Deschise",
      category: "Sports",
      eventDate: "2025-06-10T19:30:00.000Z",
      venue: "Lacu Rosu",
      city: "Cheile Bicaz",
      price: "2000",
      totalSeats: 58,
      availableSeats: 50,
      imageUrl: null,
      isStatic: false,
    },
    {
      id: 4,
      title: "UX Design Workshop",
      category: "Workshop",
      eventDate: "2025-06-15T09:00:00.000Z",
      venue: "WeWork",
      city: "Podu Iloaiei",
      price: "500",
      totalSeats: 50,
      availableSeats: 20,
      imageUrl: null,
      isStatic: false,
    },
  ],
  pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
};

async function loginAndGoToEvents(page) {
  await page.goto(`${BASE_URL}/login`);
  await page.getByLabel("Email").fill(USER.email);
  await page.getByLabel("Password").fill(USER.password);
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page.getByRole("link", { name: "Browse Events →" }),
  ).toBeVisible();
  await page.goto(`${BASE_URL}/events`);
}

test.describe("sandbox banner visibility", () => {
  test("shows the sandbox banner when six events are returned", async ({
    page,
  }) => {
    await page.route("**/api/events**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(SIX_EVENTS_RESPONSE),
      });
    });

    await loginAndGoToEvents(page);

    const cards = page.getByTestId("event-card");
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(6);

    const banner = page.getByText(/sandbox holds up to/i);
    await expect(banner).toBeVisible();
    await expect(banner).toContainText("9 bookings");
  });

  test("hides the sandbox banner when four events are returned", async ({
    page,
  }) => {
    await page.route("**/api/events**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(FOUR_EVENTS_RESPONSE),
      });
    });

    await loginAndGoToEvents(page);

    const cards = page.getByTestId("event-card");
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(4);

    const banner = page.getByText(/sandbox holds up to/i);
    await expect(banner).not.toBeVisible();
  });
});
