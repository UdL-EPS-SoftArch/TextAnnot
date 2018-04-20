import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../error-message.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {

  closed: boolean;
  errorMessage: string;
  timerId: number;

  constructor(private errorMessageService: ErrorMessageService) {
    this.errorMessageService.errorMessage$.subscribe(
      errorMessage => {
        clearTimeout(this.timerId);
        this.errorMessage = errorMessage;
        this.closed = false;
        this.timerId = setTimeout(() => this.closed = true, 10000);
      });
  }

  ngOnInit() {
    this.closed = true;
  }

  onClose() {
    this.closed = true;
    clearTimeout(this.timerId);
  }
}
