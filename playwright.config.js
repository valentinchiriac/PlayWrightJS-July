// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { trace } from "node:console";
import { TIMEOUT } from "node:dns";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  //directorul unde se afla testele
  testDir: "./tests",
  //default timeoutul este de 30 de secunde, noi am setat la 40 secunde
  timeout: 20_000,
  expect: { timeout: 30_000 },
  //rapoartele testelor vor fi facute in format html
  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    //trace: 'on',
    trace: "retain-on-failure",
  },
};

//exporta config file catre tot proiectul, toate setarile vor fi globale
module.exports = config;
