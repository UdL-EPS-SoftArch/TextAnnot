import { Router } from '@angular/router';
import {Component} from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private breadService: BreadcrumbService){
    router.events.subscribe( val => {
      breadService.serializePages(router.url);
    });
  }

}
