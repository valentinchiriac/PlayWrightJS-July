import { test, expect } from "@playwright/test";

const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const USER = {
  email: "valentin@shetty.com",
  password: "AnaAreMere205!",
};
const sandboxWarning =
  "You can add up to 6 events. Once the limit is reached, your oldest event is automatically replaced when you add a new one.";

function createMockEvents(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: `mock-event-${index + 1}`,
    title: `Eveniment palas ${index + 1}`,
    description: "Event returned by the Playwright route mock.",
    category: "Sports",
    venue: "Palas Mall",
    city: "Bucharest",
    eventDate: "2026-12-01T09:00:00.000Z",
    price: 230,
    totalSeats: 100,
    availableSeats: 100,
    imageUrl: "https://example.com/mock-event.jpg",
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  }));
}

async function mockEvents(page, eventCount) {
  await page.route("**/api/events**", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      json: {
        success: true,
        data: createMockEvents(eventCount),
        pagination: {
          total: eventCount,
          page: 1,
          limit: 10,
          totalPages: 1,
        },
      },
    });
  });
}

async function login(page) {
  await page.goto(`${BASE_URL}/login`);
  await page.getByLabel("Email").fill(USER.email);
  await page.getByLabel("Password").fill(USER.password);
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page.getByRole("link", { name: "Browse Events →" }),
  ).toBeVisible();
}

test.describe("sandbox banner visibility", () => {
  test("shows the warning when the Events API returns more than five events", async ({
    page,
  }) => {
    await login(page);
    await mockEvents(page, 7);

    await page.goto(`${BASE_URL}/events`);

    await expect(
      page.getByText("you can create up to 6 custom events", { exact: false }),
    ).toBeVisible();
  });

  test("does not show the warning when the Events API returns five events", async ({
    page,
  }) => {
    await login(page);
    await mockEvents(page, 5);

    await page.goto(`${BASE_URL}/events`);

    await expect(
      page.getByText(sandboxWarning, { exact: true }),
    ).not.toBeVisible();
  });
});
