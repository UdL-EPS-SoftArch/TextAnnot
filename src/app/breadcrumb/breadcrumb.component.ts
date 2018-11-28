import { BreadcrumbService } from '../breadcrumb.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from './page';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  collection: Page[] = [];

  constructor(public router: Router,
              public breadService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadService.collection.subscribe(
      collection => {
        this.collection = collection;
      }
    );
  }

}
