import { ModalService } from './modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  yes() {
    this.modalService.result$.next(true);
    this.modalService.destroy();
  }

  no() {
    this.modalService.result$.next(false);
    this.modalService.destroy();
  }
}
