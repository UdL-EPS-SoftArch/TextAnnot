import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from './authentication-basic.service';
import { User } from './user';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-basic,[app-login-basic]',
  templateUrl: './login-basic.component.html',
  styleUrls: ['./login-basic.component.css'],
  providers: [AuthenticationBasicService]
})
export class LoginBasicComponent implements OnInit {
  modalRef: NgbModalRef;
  errorMessage = '';

  constructor(private authenticationService: AuthenticationBasicService,
              private modalService: NgbModal) { }

  ngOnInit() { }

  showLoginModal(content) {
    this.modalRef = this.modalService.open(content, );
  }

  hideLoginModal() {
    this.modalRef.dismiss();
    this.errorMessage = '';
  }

  login(userInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    this.authenticationService.login(userInput.value, passwordInput.value)
      .subscribe(
        user => {
          this.authenticationService.storeCurrentUser(user);
          this.modalRef.dismiss();
        });
  }

  logout(): void {
    this.authenticationService.logout();
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  getUser(): User {
    return this.authenticationService.getCurrentUser();
  }
}
