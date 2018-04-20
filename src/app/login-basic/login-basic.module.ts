import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routing';
import { NgbAlertModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginBasicComponent } from './login-basic.component';
import { AuthenticationBasicService } from './authentication-basic.service';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    NgbAlertModule,
    RouterModule.forRoot(routes),
    ErrorHandlerModule,
  ],
  providers: [AuthenticationBasicService],
  declarations: [LoginBasicComponent],
  exports: [LoginBasicComponent]
})
export class LoginBasicModule { }
