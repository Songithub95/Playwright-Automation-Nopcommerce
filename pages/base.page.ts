import { Page, expect, selectors } from "@playwright/test";
import { getEnvConfig } from "../config/env.config";
import { logger } from "../utils/logger";

const envConfig = getEnvConfig();

export class BasePage {

  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = getEnvConfig().baseURL;
  }

 async navigateTo(path: string = "/") {
    const url = `${this.baseURL}${path.replace(/^\//, "")}`;
    logger.info(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  async expectVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async selectElementOption(selector: string, option: string) {
    await this.page.selectOption(selector, { label: option });
  }
}
