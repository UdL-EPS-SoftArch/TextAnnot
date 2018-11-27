import { element, by, ElementArrayFinder, browser } from 'protractor';

export class TagHierarchyDetailsPage {
  private name;
  private uri;
  private tree;

  async getName(): Promise<string> {
    return this.name.getText();
  }

  async getUri(): Promise<string> {
    return this.uri.getText();
  }
}
