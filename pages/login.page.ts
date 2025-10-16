import { BasePage } from './base.page';
import { Page } from '@playwright/test';
import { selectors } from "../elements/loginPageSelectors";

export class LoginPage extends BasePage {
  page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickLoginLink() {
    const el = this.page.locator(selectors.LOGIN_LINK)
    await el.click();
  }

  async emailInput(email: string) {
    const el = this.page.locator(selectors.EMAIL_INPUT);
    await el.fill(email);
  }

  async passwordInput(password: string) {
    const el = this.page.locator(selectors.PASSWORD_INPUT);
    await el.fill(password)
  }

  async clickForgotPasswordLink() {
    const el = this.page.locator(selectors.FORGOT_PASSWORD_LINK);
    await el.click();
  }

  async clickLoginButton() {
    const el = this.page.locator(selectors.LOGIN_BTN);
    await el.click();
  } 

}
module.exports = { LoginPage };

