import { element, by, browser } from 'protractor';

export class UserFormPage {

  private form;
  private username;
  private email;
  private password;

  constructor() {
    this.form = element(by.id('user-form'));
    this.username = this.form.element(by.id('username'));
    this.email = this.form.element(by.id('email'));
    this.password = this.form.element(by.id('password'));
  }

  async fillUserForm(username: string, email: string, password: string): Promise<void> {
    await this.username.sendKeys(username);
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.form.submit();
    await browser.waitForAngular();
  }
}
