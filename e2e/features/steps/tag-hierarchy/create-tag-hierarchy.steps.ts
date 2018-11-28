import { browser } from 'protractor';
import { TagHierarchyListPage } from './../../../pages/tag-hierarchy/tag-hierarchy-list.page';
import { binding, when, then } from 'cucumber-tsflow';
import { TagHierarchyPopUpPage } from './../../../pages/tag-hierarchy/tag-hierarchy-popup.page';
import { expect } from 'chai';

@binding()
class CreateTagHierarchySteps {

  private tagHierarchyForm = new TagHierarchyPopUpPage();
  private tagHierarchyList = new TagHierarchyListPage();

  @when(/^I create a tag hierarchy with name "([^"]*)"$/)
  async createTagHierarchyWithName(name: string): Promise<void> {
    await this.tagHierarchyForm.clickCreateButton();
    await this.tagHierarchyForm.inputName(name);
  }

  @then(/^a tag hierarchy with name "([^"]*)" is present$/)
  async tagHierarchyIsPresent(name: string): Promise<void> {
    const names = await this.tagHierarchyList.getTagHierarchiesNames();
    expect(names.includes(name)).to.equal(true);
  }

  @when(/^I click the submit button$/)
  async submitTagHierarchy(): Promise<void> {
    await this.tagHierarchyForm.clickSubmitButton();
  }
}

export = CreateTagHierarchySteps;
