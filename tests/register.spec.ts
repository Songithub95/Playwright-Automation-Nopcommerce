import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { userData, uniquePassword, gender} from '../utils/testData';
import { logger } from "../utils/logger";


test('Register new account', async ({ page }) => {
    const register = new RegisterPage(page);

    logger.info(`Navigate to web page`);
    await register.navigateTo();

    await register.clickRegisterLink();
    logger.info('Navigate to Register page');
    
    await register.selectGender(gender.gents);
    logger.info(`Select ${gender.gents}`)

    await register.inputFirstName(userData.firstName);
    logger.info(`Enter First name with "${userData.firstName}"`);

    await register.inputLastName(userData.lastName);
    logger.info(`Enter Last name with "${userData.lastName}`);

    await register.inputEmail(userData.email);
    logger.info(`Enter Email with "${userData.email}"`);

    await register.inputPassword(uniquePassword());
    logger.info(`Enter Password with "${userData.email}"`);

    await register.inputComfirmPassword(uniquePassword());
    logger.info(`Enter Confirm Password with "${userData.email}"`);

});
