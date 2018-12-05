import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from './breadcrumb/page';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public collection: BehaviorSubject<Page[]>;
  private pages: Page[] = [];
  private homepage: Page = new Page('Home', '/');

  constructor(public router: Router) {
    this.pages.push(this.homepage);
    this.collection = new BehaviorSubject(this.pages);
  }

  public serializePages(url: String) {
    const routes = url.split('/');

    // Reset Breadcrumb
    this.pages = [];
    this.pages.push(this.homepage);

    // Load actual URL
    routes.filter(param => param !== 'about' && !Number(param)).forEach(route => {
      if (route !== '/' && route !== undefined && route != null && route !== '') {
        this.pages.push(new Page(decodeURI(route.charAt(0).toUpperCase() + route.slice(1)), this.processRouteURL(route)));
      }
    });

    // Update Breadcrumb
    this.collection.next(this.pages);
  }

  private processRouteURL(url: string): string {
    return '/' + url;
  }

  public navigate(url: string) {
    if (url.split('/')[url.split('/').length - 1] !== this.router.url) {
      this.router.navigateByUrl(url);
    }
  }


}
