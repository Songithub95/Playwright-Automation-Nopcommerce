import { BasePage } from "./base.page";
import { Page } from "@playwright/test";
import { selectors } from "elements/registerPageSelectors";


export class RegisterPage extends BasePage {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickRegisterLink() {
    const el = this.page.locator(selectors.REGISTER_LINK);
    await el.click();
  }

  async selectGender(gender: string) {
    const el = this.page.locator(`input#gender-${gender}`);
    await el.click();
  }

  async inputLastName(lastName: string) {
    const el = this.page.locator(selectors.LAST_NAME_INPUT);
    await el.fill(lastName);
  }

  async inputFirstName(firstName: string) {
    const el = this.page.locator(selectors.FIRST_NAME_INPUT);
    await el.fill(firstName);
  }

  async inputEmail(email: string) {
    const el = this.page.locator(selectors.EMAIL_INPUT);
    await el.fill(email);
  }

  async inputPassword(password: string) {
    const el = this.page.locator(selectors.PASSWORD_INPUT);
    await el.fill(password);
  }

  async inputComfirmPassword(password: string) {
    const el = this.page.locator(selectors.CONFIRMATION_PASSWORD_INPUT);
    await el.fill(password);
  }

  async clickRegisternButton() {
    const el = this.page.locator(selectors.REGISTER_BTN);
    await el.click();
  }

}
