import { element, by, browser } from 'protractor';

export class ConfirmFormPage {

  private confirmBtn;
  private cancelBtn;

  constructor() {
    this.confirmBtn = element(by.id('confirm'));
    this.cancelBtn = element(by.id('cancel'));
  }

  async clickConfirmButton(): void {
    await this.confirmBtn.click();
    browser.waitForAngular();
  }

  async clickCancelButton(): void {
    await this.cancelBtn.click();
    browser.waitForAngular();
  }
}
