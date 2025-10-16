import { test, expect } from "@playwright/test";
import { CategoryPage } from "../pages/category.page";
import { categoryName, subCategoryName, filterOptions, manufacturer, productName } from "../utils/testData";
import { logger } from "../utils/logger";


test("Explore category: sort and filter", async ({ page }) => {
  const cat = new CategoryPage(page);

  logger.info(`Navigate to web page`);
  await cat.navigateTo();

  logger.info(`Hover ${categoryName.COM}`);
  await cat.hoverCategory(categoryName.COM);

  logger.info(`Select ${subCategoryName.NB}`);
  await cat.selectSubCategory(subCategoryName.NB);

  logger.info(`Sort by Low to High`);
  await cat.sortBy(filterOptions.L2H);

  await cat.verifyProductisSortedAscendingByPrice();
  logger.info(`Verify product price is ascending`);

  logger.info(`Sort by High to Low`);
  await cat.sortBy(filterOptions.H2L);

  await cat.verifyProductiisSortedDescendingByPrice();
  logger.info(`Verify product price is descending`);

  logger.info(`Select checkbox ${manufacturer.Apple}`);
  await cat.selectByManufacturer(manufacturer.Apple);

  await cat.verifyProductName(productName.macBook);
  logger.info(`Verify ${productName.macBook} displays after filering with ${manufacturer.Apple}`);

  logger.info(`Select checkbox ${manufacturer.HP}`);
  await cat.selectByManufacturer(manufacturer.HP);

  await cat.verifyProductName(productName.HP_1);
  logger.info(`Verify ${productName.HP_1} displays after filering with ${manufacturer.HP}`);

  await cat.verifyProductName(productName.HP_2);
  logger.info(`Verify ${productName.HP_2} displays after filering with ${manufacturer.HP}`);

});
