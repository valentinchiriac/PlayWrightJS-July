# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260826EventPlannerSeatTest.spec.js >> VerifyLoginAndBookASeatAtEvent
- Location: PlayWrightAutomation\tests\20260826EventPlannerSeatTest.spec.js:3:5

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.absolute.inset-0.flex')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.absolute.inset-0.flex')
  - Test timeout of 20000ms exceeded.

```

```yaml
- navigation:
  - link "EventHub":
    - /url: /
    - img
    - text: EventHub
  - link "Home":
    - /url: /
  - link "Events":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
  - link "API Docs":
    - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - button "Admin":
    - text: Admin
    - img
  - text: valentin@shetty.com
  - button "Logout"
- main:
  - heading "Discover & Book Amazing Events" [level=1]
  - paragraph: From tech conferences to live concerts, sports events to cultural festivals — find experiences that inspire you.
  - link "Browse Events →":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
    - button "My Bookings"
  - heading "Featured Events" [level=2]
  - paragraph: Hand-picked upcoming events just for you
  - link "View all →":
    - /url: /events
  - article:
    - img "Dilli Diwali Mela"
    - text: Festival Featured
    - link "Dilli Diwali Mela":
      - /url: /events/285
      - heading "Dilli Diwali Mela" [level=3]
    - img
    - text: Tue, 20 Oct
    - img
    - text: Pragati Maidan Exhibition Grounds, Delhi
    - paragraph: $300
    - text: 5851 seats available
    - link "Book Now":
      - /url: /events/285
  - article:
    - img "Hollywood Monsoon Night — Los Angeles"
    - text: Concert Featured
    - link "Hollywood Monsoon Night — Los Angeles":
      - /url: /events/284
      - heading "Hollywood Monsoon Night — Los Angeles" [level=3]
    - img
    - text: Sat, 11 Jul
    - img
    - text: Dome, NSCI SVP Stadium, Worli, Los Angeles
    - paragraph: $2,500
    - text: 2796 seats available
    - link "Book Now":
      - /url: /events/284
  - article:
    - img "World Tech Summit"
    - text: Conference Featured
    - link "World Tech Summit":
      - /url: /events/283
      - heading "World Tech Summit" [level=3]
    - img
    - text: Sat, 18 Apr
    - img
    - text: Hyderabad, Hitech city, Hyderabad
    - paragraph: $1,500
    - text: 9 seats left!
    - link "Book Now":
      - /url: /events/283
  - heading "Ready to experience something new?" [level=2]
  - paragraph: Browse thousands of events across India. Book tickets in seconds.
  - link "Explore All Events":
    - /url: /events
    - button "Explore All Events"
- contentinfo:
  - heading "Rahul Shetty Academy" [level=3]
  - paragraph: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
  - heading "Popular Courses" [level=3]
  - list:
    - listitem:
      - link "Selenium WebDriver with Java":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Playwright with JavaScript":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "RestAssured API Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Cypress End-to-End Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Appium Mobile Testing":
        - /url: https://rahulshettyacademy.com
  - heading "QA Job Hiring Platform" [level=3]
  - paragraph: Get hired faster — take skill assessments trusted by top QA employers worldwide.
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
  - heading "EventHub Practice App" [level=3]
  - list:
    - listitem:
      - link "Browse Events":
        - /url: /events
    - listitem:
      - link "My Bookings":
        - /url: /bookings
    - listitem:
      - link "Manage Events":
        - /url: /admin/events
    - listitem:
      - link "API Documentation":
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - paragraph: © 2026 Rahul Shetty Academy. All rights reserved.
  - link "rahulshettyacademy.com →":
    - /url: https://rahulshettyacademy.com
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
- alert
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test("VerifyLoginAndBookASeatAtEvent", async ({ page }) => {
  4   |   await page.goto("https://eventhub.rahulshettyacademy.com/login");
  5   |   await page.getByRole("textbox", { name: "Email" }).click();
  6   |   await page
  7   |     .getByRole("textbox", { name: "Email" })
  8   |     .fill("valentin@shetty.com");
  9   |   await page.getByRole("textbox", { name: "Password" }).click();
  10  |   await page.getByRole("textbox", { name: "Password" }).fill("AnaAreMere205!");
  11  |   await page.getByRole("button", { name: "Sign In" }).click();
  12  |   await page.getByRole("link", { name: "Register" }).click();
  13  |   await page.getByTestId("register-email").click();
  14  |   await page.getByTestId("register-email").fill("valentin@shetty.com");
  15  |   await page.getByTestId("register-email").press("Tab");
  16  |   await page.getByTestId("register-password").fill("AnaAreMere205!");
  17  |   await page.getByRole("textbox", { name: "Repeat your password" }).click();
  18  |   await page
  19  |     .getByRole("textbox", { name: "Repeat your password" })
  20  |     .fill("AnaAreMere205!");
  21  |   await page.getByTestId("register-btn").click();
  22  |   await expect(
  23  |     page.getByRole("button", { name: "Explore All Events" }),
  24  |   ).toBeVisible();
  25  |   await expect(page.getByRole("main")).toContainText(
  26  |     "Ready to experience something new?",
  27  |   );
  28  |   await page.getByRole("button", { name: "Explore All Events" }).click();
  29  |   await expect(
  30  |     page.getByRole("button", { name: "Add New Event" }),
  31  |   ).toBeVisible();
  32  |   await expect(page.getByRole("main")).toContainText("Add New Event");
  33  |   await page.getByRole("button", { name: "Add New Event" }).click();
  34  |   await page.getByTestId("event-title-input").click();
  35  |   await page
  36  |     .getByTestId("event-title-input")
  37  |     .fill("Curs Escalada Cheile Bicaz");
  38  |   await page.getByRole("textbox", { name: "Describe the event…" }).click();
  39  |   await page
  40  |     .getByRole("textbox", { name: "Describe the event…" })
  41  |     .fill("Catarare pana la moarte si dincolo de ea");
  42  |   await page.getByLabel("Category*").selectOption("Sports");
  43  |   await page.getByRole("textbox", { name: "City*" }).click();
  44  |   await page.getByRole("textbox", { name: "City*" }).fill("Westworld");
  45  |   await page.getByRole("textbox", { name: "Venue*" }).click();
  46  |   await page.getByRole("textbox", { name: "Venue*" }).fill("tripme");
  47  |   await page.getByTestId("add-event-btn").click();
  48  |   await expect(page.getByTestId("admin-event-form")).toContainText(
  49  |     "Event date is required",
  50  |   );
  51  |   await expect(page.getByTestId("admin-event-form")).toContainText(
  52  |     "Enter a valid price (≥ 0)",
  53  |   );
  54  |   await expect(page.getByTestId("admin-event-form")).toContainText(
  55  |     "Must have at least 1 seat",
  56  |   );
  57  |   await expect(page.getByTestId("admin-event-form")).toContainText("Venue*");
  58  |   await page
  59  |     .getByRole("textbox", { name: "Event Date & Time*" })
  60  |     .fill("2026-08-28T02:25");
  61  |   await page.getByRole("spinbutton", { name: "Price ($)*" }).click();
  62  |   await page.getByRole("spinbutton", { name: "Price ($)*" }).fill("235");
  63  |   await page.getByRole("spinbutton", { name: "Total Seats*" }).click();
  64  |   await page.getByRole("spinbutton", { name: "Total Seats*" }).fill("200");
  65  |   await page.getByTestId("add-event-btn").click();
  66  |   await expect(page.getByText("You can add up to 6 events.")).toBeVisible();
  67  |   await page.getByRole("link", { name: "EventHub" }).click();
> 68  |   await expect(page.locator(".absolute.inset-0.flex")).toBeVisible();
      |                                                        ^ Error: expect(locator).toBeVisible() failed
  69  |   await expect(
  70  |     page.getByRole("link", { name: "Curs Escalada Cheile Bicaz" }),
  71  |   ).toBeVisible();
  72  |   await expect(page.getByText("seats available")).toBeVisible();
  73  |   await expect(page.getByText("200 seats available")).toBeTruthy();
  74  |   await page
  75  |     .getByRole("article")
  76  |     .filter({ hasText: "SportsCurs Escalada Cheile" })
  77  |     .getByTestId("book-now-btn")
  78  |     .click();
  79  |   await page.getByRole("button", { name: "+" }).click();
  80  |   await page.getByRole("textbox", { name: "Full Name*" }).click();
  81  |   await page.getByRole("textbox", { name: "Full Name*" }).fill("Gica");
  82  |   await page.getByRole("textbox", { name: "Full Name*" }).press("Tab");
  83  |   await page.getByTestId("customer-email").fill("gica@petrescu.com");
  84  |   await page.getByRole("textbox", { name: "Phone Number*" }).click();
  85  |   await page.getByRole("textbox", { name: "Phone Number*" }).fill("3216546446");
  86  |   const ticketPrice = page
  87  |     .getByText("Book Tickets")
  88  |     .locator("..")
  89  |     .locator("span");
  90  |   const ticketPriceValue = await ticketPrice.textContent();
  91  |   console.log("Ticket price:", ticketPriceValue);
  92  |   const currentBookingPrice = page.getByText("$235", { exact: true }).last();
  93  |   const currentBookingPriceText = await currentBookingPrice.textContent();
  94  |   console.log("Booking price:", currentBookingPriceText);
  95  |   expect(currentBookingPriceText).toBe(ticketPriceValue);
  96  |   await page.getByRole("button", { name: "Confirm Booking" }).click();
  97  |   await expect(
  98  |     page.getByRole("heading", { name: "Booking Confirmed! 🎉" }),
  99  |   ).toBeVisible();
  100 |   const eventsLink = await page
  101 |     .locator("a")
  102 |     .filter({ hasText: "Events" })
  103 |     .first();
  104 |   await eventsLink.click();
  105 |   await expect(page.getByText("199 / 200 seats", { exact: true })).toBeTruthy();
  106 | });
  107 | 
```