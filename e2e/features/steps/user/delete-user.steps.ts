import { binding, when } from 'cucumber-tsflow';
import { UserDetailsPage } from '../../../pages/user/user-details.page';
import { ConfirmFormPage } from '../../../pages/confirm-form.page';

@binding()
class DeleteUserSteps {
  private confirmForm = new ConfirmFormPage();

  @when(/^I confirm the deletion$/)
  public iConfirmDeletion(): void {
    this.confirmForm.clickConfirmButton();
  }
}
export = DeleteUserSteps;
