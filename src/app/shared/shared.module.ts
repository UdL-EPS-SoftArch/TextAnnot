import { ModalService } from './confirm-modal/modal.service';
import { DomService } from './confirm-modal/dom.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
    entryComponents: [
      ConfirmModalComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ConfirmModalComponent
    ],
    declarations: [
      ConfirmModalComponent,
    ],
    providers: [
      DomService,
      ModalService
    ]
})
export class SharedModule { }
