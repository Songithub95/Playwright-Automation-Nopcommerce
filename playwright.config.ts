import { defineConfig, devices } from "@playwright/test";
import { getEnvConfig } from "./config/env.config";

const envConfig = getEnvConfig();

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 1,
  reporter: [["html", { open: "never" }], ["allure-playwright"]],
  use: {
    baseURL: envConfig.baseURL,
    headless: false,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "on",
  },
  projects: [
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "WebKit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
