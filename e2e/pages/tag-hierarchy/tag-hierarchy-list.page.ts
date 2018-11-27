import { element, by, ElementArrayFinder, browser } from 'protractor';

export class TagHierarchyListPage {

  private tagHierarchies;

  constructor() {
    this.tagHierarchies = element.all(by.css('div.card'));
  }

  async getTagHierarchyInPosition(position: number): Promise<ElementArrayFinder> {
    return await this.tagHierarchies.get(position - 1);
  }

  async getTagHierarchyCount(): Promise<number> {
    return await this.tagHierarchies.count();
  }

  async getTagHierarchiesNames(): Promise<any> {
    return await element.all(by.className('th-name')).map(e => e.getText());
  }

  async deleteTagHierarchyByName(name: string): Promise<any> {
    await browser.takeScreenshot();
    const buttons = await element.all(by.className('btn-outline-danger'));
    const names = await element.all(by.className('th-name')).map(e => e.getText());
    console.log(names.indexOf(name));
    console.log(name);
    console.log(names);
    console.log(buttons.length);
    await buttons[names.indexOf(name)].click();
  }
}
