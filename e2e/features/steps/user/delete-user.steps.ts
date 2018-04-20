import { binding, given, when, then } from 'cucumber-tsflow';
import { expect } from 'chai';
import { ConfirmPage } from '../../../pages/confirm.page';

@binding()
class DeleteUserSteps {
  private confirmForm = new ConfirmPage();

  @when(/^I confirm the deletion$/)
  public iConfirmDeletion(): void {
    this.confirmForm.clickConfirmButton();
  }
}
export = DeleteUserSteps;
