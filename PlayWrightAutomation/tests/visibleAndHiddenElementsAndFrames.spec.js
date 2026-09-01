const { test, expect } = require("@playwright/test");

test("HiddenPopUpValidations", async ({ page }) => {
  //actions for verifying hidden and visible elements
  await page.goto("https://rahulshettyacademy.com/Automationpractice/");
  await expect(page.locator("#displayed-text")).toBeVisible;
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  //verificare a pop-up-urilor; pagina 'asculta' pentru orice dialog-box
  page.on("dialog", (dialog) => dialog.accept()); //actiunea de acceptare a dialog-box-ului
  //nu conteaza linia la care e scris acest dialog method, odata ce in cod apare o actiune in care apare un astfel de pop-up, se va veni inapoi la linia asta si se executa actiunea
  await page.getByRole("button", { name: "Confirm" }).click(); //odata ce apasa confirm btn, se intoarce la linia 10 si accepta popupul
  await page.locator("#mousehover").hover();
  //handle frames
  const framePage = page.frameLocator("#courses-iframe");
  await framePage.locator("li a[href*='lifetime-access']:visible").click();
  console.log(await framePage.locator(".text h2").textContent());
  //aici luam textul gasit in pagina la acel locator si il bagam intr-o constanta
  const textCheckJoiners = await framePage.locator(".text h2").textContent();
  //aici luam textu de mai sus si il splituim dupa spatii si afisam primul element dupa spatiu
  console.log(textCheckJoiners.split(" ")[1]);
});
