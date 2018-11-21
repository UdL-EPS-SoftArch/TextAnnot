import { element, by, ElementArrayFinder, browser } from 'protractor';

export class TagHierarchyDetailsPage {
  private name;
  private uri;
  private tree;

  async getName(): string {
    return this.name.getText();
  }

  async getUri(): string {
    return this.uri.getText();
  }
}
