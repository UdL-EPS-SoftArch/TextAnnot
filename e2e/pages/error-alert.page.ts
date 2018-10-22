import { element, by, browser, ExpectedConditions, ElementFinder } from 'protractor';

export class ErrorAlert {

  private errorAlert: ElementFinder;
  private errorAlertClose: ElementFinder;

  constructor() {
    this.errorAlert = element(by.css('.alert'));
    this.errorAlertClose = this.errorAlert.element(by.css('button.close'));
  }

  async getMessage(): string {
    return await this.errorAlert.getText();
  }

  async close(): void {
    await this.errorAlertClose.click();
  }
}
