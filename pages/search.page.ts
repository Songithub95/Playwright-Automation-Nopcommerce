import { BasePage } from './base.page';
import { expect, Page } from '@playwright/test';
import { selectors } from "elements/searchPageSelectors";


export class SearchPage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async inputSearchKeyWord(productName: string) {
    const el = this.page.locator(selectors.SEARCH_INPUT);
    await el.fill(productName);
  }

  async clickSearchButton() {
    const el = this.page.locator(selectors.SEARCH_BTN);
    await el.click();
  }

  async verifyProductNameAfterSearch(productName: string) {
    const el = this.page.locator(selectors.PRODUCT_NAME);
    const actualResult = await el.textContent();
    expect(actualResult).toContain(productName);
  }
}
