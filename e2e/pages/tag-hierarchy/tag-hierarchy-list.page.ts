import { element, by, ElementArrayFinder, browser } from 'protractor';

export class TagHierarchyListPage {

  private tagHierarchies;

  constructor() {
    this.tagHierarchies = element.all(by.css('div.card'));
  }

  async getTagHierarchyInPosition(position: number): ElementArrayFinder {
    return await this.tagHierarchies.get(position - 1);
  }

  async getTagHierarchyCount(): number {
    return await this.tagHierarchies.count();
  }
}
