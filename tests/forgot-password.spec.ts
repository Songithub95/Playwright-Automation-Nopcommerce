import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { RecoveryPage } from 'pages/passwordRecovery.page';
import { logger } from "../utils/logger";
import { uniqueEmail, alert } from "../utils/testData";

test('Forgot password request', async ({ page }) => {
  const login = new LoginPage(page);
  const recovery = new RecoveryPage(page);

  logger.info(`Navigate to web page`);
  await recovery.navigateTo();

  logger.info('Navigate to Login page');
  await login.clickLoginLink();
  
  logger.info('Click Forgot Password link');
  await login.clickForgotPasswordLink();

  logger.info('Enter email');
  await recovery.yourEmailAddressInput(uniqueEmail());

  logger.info('Click Recover button');
  await recovery.clickRecoverButton();

  await recovery.verifyFailedEmailRecover(alert.emailAlert);
  logger.info(`Verify alert ${alert.emailAlert}`);
  
});
