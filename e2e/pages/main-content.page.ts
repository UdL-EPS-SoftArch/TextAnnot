import { element, by, browser } from 'protractor';

export class MainContentPage {

  private mainContainer;

  constructor() {
    this.mainContainer = element(by.css('main.container'));
  }

  async clickLinkWithText(text: string): void {
    await this.mainContainer.element(by.partialLinkText(text)).click();
    browser.waitForAngular();
  }

  async clickButtonWithText(text: string): void {
    await this.mainContainer.element(by.partialButtonText(text)).click();
    browser.waitForAngular();
  }
}
