import { element, by, ElementArrayFinder, browser } from 'protractor';

export class TagHierarchyPopUpPage {

  async inputName(name: string): Promise<void> {
    await element(by.name('name')).sendKeys(name);
  }

  async clickCreateButton(): Promise<void> {
    await element(by.id('add-tag-hierarchy')).click();
  }

  async clickSubmitButton(): Promise<void> {
    await element(by.id('submit')).click();
  }
}
