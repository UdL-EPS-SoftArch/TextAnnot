import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './login-basic.routing';
import { LoginNavbarComponent } from './login-navbar.component';
import { LoginFormComponent } from './login-form.component';
import { AuthenticationBasicService } from './authentication-basic.service';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    ErrorHandlerModule,
  ],
  providers: [AuthenticationBasicService],
  declarations: [LoginNavbarComponent, LoginFormComponent],
  exports: [LoginNavbarComponent]
})
export class LoginBasicModule { }
