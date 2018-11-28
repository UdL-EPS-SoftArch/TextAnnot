import { element, by, ElementArrayFinder, browser } from 'protractor';

export class UserListPage {

  private users;

  constructor() {
    this.users = element.all(by.css('div.card'));
  }

  async getUserInPosition(position: number): Promise<ElementArrayFinder> {
    return await this.users.get(position - 1);
  }

  async getUsersCount(): Promise<number> {
    return await this.users.count();
  }
}
