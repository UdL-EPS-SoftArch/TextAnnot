import { binding, given, when, then } from 'cucumber-tsflow';
import { TagHierarchyListPage } from './../../../pages/tag-hierarchy/tag-hierarchy-list.page';

@binding()
class DeleteTagHierarchySteps {
  private tagHierarchyList = new TagHierarchyListPage();

  @when(/^I delete the tag hierarchy with name "([^"]*)"$/)
  async createTagHierarchyWithName(name: string): Promise<void> {
    await this.tagHierarchyList.deleteTagHierarchyByName(name);
  }
}

export = DeleteTagHierarchySteps;
