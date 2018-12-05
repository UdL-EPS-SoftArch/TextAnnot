import { ModalService } from './shared/confirm-modal/modal.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(router: Router,
              breadService: BreadcrumbService,
              public modalService: ModalService) {
    router.events.subscribe( val => {
      breadService.serializePages(router.url);
    });
  }

}
