import { binding, given, when, then } from 'cucumber-tsflow';
import { UserFormPage } from '../../../pages/user/user-form.page';
import { UserListPage } from '../../../pages/user/user-list.page';

@binding()
class CreateUserSteps {
  private userForm = new UserFormPage();
  private userList = new UserListPage();

  @when(/^I fill the user form with username "([^"]*)", e-mail "([^"]*)" and password "([^"]*)"$/)
  async createUserWithUsernameEmailPassword(username: string, email: string, password: string): void {
    await this.userForm.fillUserForm(username, email, password);
  }
}
export = CreateUserSteps;
