import { BasePage } from './base.page';
import { Page, expect } from '@playwright/test';
import { selectors } from "elements/passwordRecoveryPageSelectors";

export class RecoveryPage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickRecoverButton() {
    const el = this.page.locator(selectors.RECOVER_BTN);
    await el.click();
  }

  async yourEmailAddressInput(email: string) {
    const el = this.page.locator(selectors.YOUR_EMAIL_ADDRESS_INPUT);
    await el.fill(email)
  }

  async verifyFailedEmailRecover(alert: string) {
    const el = this.page.locator(selectors.EMAIL_NOT_FOUND_ALERT);
    expect(el).toHaveText(alert);
  }

}
module.exports = { RecoveryPage };
