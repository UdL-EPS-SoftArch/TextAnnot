import { TagHierarchyListPage } from './../../../pages/tag-hierarchy/tag-hierarchy-list.page';
import { binding, given, when, then } from 'cucumber-tsflow';
import { expect } from 'chai';

@binding()
class ListTagHierarchySteps {
  private tagHierarchyList = new TagHierarchyListPage();

  @then(/^I see (\d+) tag hierarchies/)
  async iSeeTagHierarchies(count: number): Promise<void> {
    expect(await this.tagHierarchyList.getTagHierarchyCount()).to.equal(count);
  }
}

export = ListTagHierarchySteps;
