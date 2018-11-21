import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';
import { UserListPage } from '../../../pages/user/user-list.page';
import { MainContentPage } from '../../../pages/main-content.page';

@binding()
class ListUsersSteps {
  private mainContent = new MainContentPage();
  private userList = new UserListPage();

  @when(/^I click the user with name "([^"]*)"$/)
  public IClickAUserWithName (name: string): void {
    this.mainContent.clickLinkWithText(name);
  }

  @then(/^I see (\d+) users/)
  async iSeeUsers(count: number): Promise<void> {
    expect(await this.userList.getUsersCount()).to.equal(count);
  }
}
export = ListUsersSteps;
