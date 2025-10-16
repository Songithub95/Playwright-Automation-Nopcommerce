import { BasePage } from "./base.page";
import { expect, Locator, Page } from "@playwright/test";
import { selectors } from "../elements/categoryPageSelectors";
import { logger } from "../utils/logger";

export class CategoryPage extends BasePage {
  page: Page;
  sortSelect: Locator;
  productList: Locator;
  priceElements: Locator;
  productName: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.sortSelect = page.locator(selectors.SORT_SELECT);
    this.productList = page.locator(selectors.PRODUCT_LIST);
    this.priceElements = page.locator(selectors.ELEMENTS_PRICE);
    this.productName = page.locator(selectors.PRODUCT_NAME);
  }

  async hoverCategory(categoryName: string) {
    const cat = this.page.locator(`//ul[contains(@class,'notmobile')]//a[contains(.,'${categoryName}')]`);
    await cat.hover();
  }

  async selectSubCategory(subCategoryName: string) {
    const subCat = this.page.locator(`//ul[contains(@class,'notmobile')]//a[contains(.,'${subCategoryName}')]`);
    await subCat.click();
  }

  async sortBy(option: string) {
    const el = this.sortSelect.selectOption(option);
    await el;
  }

  async getAllPrices(): Promise<number[]> {
    const priceTexts = await this.priceElements.allTextContents();

    // Convert to number array (remove $, ₫, commas, etc.)
    const prices = priceTexts.map(text => {
      const clean = text.replace(/[^0-9.,]/g, "").replace(",", ".");
      return parseFloat(clean);
    });

    return prices;
  }

  async isSortedAscending(): Promise<boolean> {
    const prices = await this.getAllPrices();
    logger.info(`Price found: ${prices}`);
    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] > prices[i + 1]) {
        return false;
      }
    }
    return true;
  }

  async isSortedDescending(): Promise<boolean> {
    const prices = await this.getAllPrices();
    logger.info(`Price found: ${prices}`);
    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] < prices[i + 1]) {
      return false;
    }
  }
    return true;
  }

  async verifyProductiisSortedDescendingByPrice() {
    const isSorted = await this.isSortedDescending();
    expect(isSorted).toBeTruthy();
  }

  async verifyProductisSortedAscendingByPrice() {
    const isSorted = await this.isSortedAscending();
    expect(isSorted).toBeTruthy();
  }

  async countProducts() {
    const productList = this.page.locator(selectors.PRODUCT_LIST);
    const numbeOfProducts = await productList.count();
    return numbeOfProducts;
  }

  async selectByManufacturer(brandName: string) {
    const el = this.page.locator(`//label[contains(.,'${brandName}')]`);
    await el.click(); 
  }

  async getProductName() {
    const el = this.page.locator(`//div[@class="product-item"]//h2/a`);
    await el.allTextContents();
  }

  async verifyProductName(productName: string) {
    const el = await this.getProductName();
    expect(el).toContain(productName)
  }

}
module.exports = { CategoryPage };
