import { element, by, browser, ExpectedConditions } from 'protractor';

export class NavigationBar {
  private navbar;
  private login;
  private logout;
  private currentUser;
  private home;

  constructor() {
    this.navbar = element(by.tagName('nav'));
    this.login = this.navbar.element(by.linkText('Login'));
    this.logout = this.navbar.element(by.linkText('Logout'));
    this.currentUser = this.navbar.element(by.id('currentUser'));
    this.home = this.navbar.element(by.className('navbar-brand'));
  }

  async clickSignin(): void {
    browser.wait(ExpectedConditions.presenceOf(this.login));
    await this.login.click();
    browser.waitForAngular();
  }

  async clickSignOut(): void {
    await this.logout.click();
    browser.waitForAngular();
  }

  async goToMenuOption(option: string): void {
    await this.navbar.element(by.linkText(option)).click();
    browser.waitForAngular();
  }

  async getCurrentUser(): string {
    if (await this.currentUser.isPresent()) {
      return await this.currentUser.getText();
    }
    return null;
  }
}
