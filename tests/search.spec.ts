import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/search.page";
import { logger } from "../utils/logger";
import { productName } from "../utils/testData";

test("Search product and validate results", async ({ page }) => {
    const search = new SearchPage(page);

    logger.info(`Navigate to web page`);
    await search.navigateTo();

    logger.info(`Enter "${productName.macBook}" into Search bar`);
    await search.inputSearchKeyWord(productName.macBook);

    logger.info("Starting product search for: MacBook");
    await search.clickSearchButton();

    await search.verifyProductNameAfterSearch(productName.macBook);
    logger.info(`Product search with "${productName.macBook}" validated successfully!`);
});
