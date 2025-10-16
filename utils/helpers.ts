import { expect, Page } from "@playwright/test";
import { logger } from "./logger";

export async function waitAndClick(
  page: Page,
  selector: string,
  timeout = 5000
) {
  await page.waitForSelector(selector, { timeout });
  await page.click(selector);
  logger.info(`Clicked element: ${selector}`);
}

export async function waitAndType(
  page: Page,
  selector: string,
  value: string,
  timeout = 5000
) {
  await page.waitForSelector(selector, { timeout });
  await page.fill(selector, value);
  logger.info(`Typed into ${selector}: ${value}`);
}

export async function assertTextVisible(page: Page, text: string) {
  await expect(page.locator(`text=${text}`)).toBeVisible();
  logger.info(`Verified text visible: "${text}"`);
}
