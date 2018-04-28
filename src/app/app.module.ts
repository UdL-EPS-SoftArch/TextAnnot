import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularHalModule } from 'angular4-hal-aot';
import { ExternalConfigurationService } from './external-configuration-service';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';

import { LoginBasicModule } from './login-basic/login-basic.module';
import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdministratorGuard } from './login-basic/administrator.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

import { AdminListComponent } from './user/user-list/admin-list.component';
import { AdminDetailComponent } from './user/user-detail/admin-detail.component';
import { AdminService } from './user/admin.service';
import { AdminCreateComponent } from './user/user-create/admin-create.component';
import { AdminEditComponent } from './user/user-edit/admin-edit.component';
import { AdminSearchComponent } from './user/user-search/admin-search.component';
import { AdminDeleteComponent } from './user/user-delete/admin-delete.component';

import { LinguistListComponent } from './user/user-list/linguist-list.component';
import { LinguistDetailComponent } from './user/user-detail/linguist-detail.component';
import { LinguistCreateComponent } from './user/user-create/linguist-create.component';
import { LinguistEditComponent } from './user/user-edit/linguist-edit.component';
import { LinguistSearchComponent } from './user/user-search/linguist-search.component';
import { LinguistDeleteComponent } from './user/user-delete/linguist-delete.component';
import { LinguistService } from './user/linguist.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdminListComponent,
    AdminDetailComponent,
    AdminCreateComponent,
    AdminEditComponent,
    AdminSearchComponent,
    AdminDeleteComponent,
    LinguistListComponent,
    LinguistDetailComponent,
    LinguistCreateComponent,
    LinguistEditComponent,
    LinguistSearchComponent,
    LinguistDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    LoginBasicModule,
    AngularHalModule.forRoot(),
    ErrorHandlerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, AdministratorGuard, AdminService, LinguistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
