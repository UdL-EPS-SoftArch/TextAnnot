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

import { SampleCreateComponent } from './sample/sample-create/sample-create.component';
import { SampleListComponent } from './sample/sample-list/sample-list.component';
import { SampleService } from './sample/sample.service';
import { SampleSearchComponent } from './sample/sample-search/sample-search.component';
import { SampleDeleteComponent } from './sample/sample-delete/sample-delete.component';
import {SampleDetailComponent} from './sample/sample-detail/sample-detail.component';
import {SampleEditComponent} from './sample/sample-edit/sample-edit.component';

import { MetadataValueService} from './metadataValue/metadataValue.service';
import { MetadataValueListComponent} from './metadataValue/metadata-value-list/metadata-value-list.component';
import { MetadataValueDetailComponent } from './metadataValue/metadata-value-detail/metadata-value-detail.component';
import { MetadataValueSearchComponent } from './metadataValue/metadata-value-search/metadata-value-search.component';
import { MetadataValueDeleteComponent } from './metadataValue/metadata-value-delete/metadata-value-delete.component';
import {MetadataValueCreateComponent} from './metadataValue/metadata-value-create/metadata-value-create.component';
import {MetadataValueEditComponent} from './metadataValue/metadata-value-edit/metadata-value-edit.component';

import { MetadataTemplateService } from './metadata-template/metadata-template.service';
import { MetadataTemplateFormComponent } from './metadata-template/metadata-template-form/metadata-template-form.component';
import { MetadataTemplateListComponent } from './metadata-template/metadata-template-list/metadata-template-list.component';

import { XMLSampleService } from './XMLsample/XMLsample.service';
import { XMLSampleCreateComponent } from './XMLsample/XMLsample-create/XMLsample-create.component';
import { XMLSampleFormComponent} from './XMLsample/XMLsample-form/XMLSample-form.component';

import { MetadatafieldService } from './metadatafield/metadatafield.service';
import { MetadataFieldListComponent } from './metadatafield/metadatafield-list/metadatafield-list.component';
import { MetadafieldCreateComponent } from './metadatafield/metadatafield-create/metadafield-create.component';
import { MetadatafieldSearchComponent } from './metadatafield/metadatafield-search/metadatafield-search.component';
import { MetadatafieldEditComponent } from './metadatafield/metadatafield-edit/metadatafield-edit.component';
import { MetadatafieldDetailComponent } from './metadatafield/metadatafield-detail/metadatafield-detail.component';
import { MetadatafieldDeleteComponent } from './metadatafield/metadatafield-delete/metadatafield-delete.component';


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
    SampleCreateComponent,
    SampleSearchComponent,
    SampleListComponent,
    SampleDeleteComponent,
    SampleDetailComponent,
    SampleEditComponent,
    XMLSampleCreateComponent,
    XMLSampleFormComponent,
    MetadataFieldListComponent,
    MetadafieldCreateComponent,
    MetadatafieldSearchComponent,
    MetadatafieldEditComponent,
    MetadatafieldDetailComponent,
    MetadatafieldDeleteComponent,
    SampleSearchComponent,
    MetadataValueListComponent,
    MetadataValueDetailComponent,
    MetadataValueSearchComponent,
    MetadataValueDeleteComponent,
    MetadataTemplateFormComponent,
    MetadataTemplateListComponent,
    MetadataValueCreateComponent,
    MetadataValueEditComponent,
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
    AuthenticationBasicService, LoggedInGuard, AdministratorGuard, AdminService, LinguistService, SampleService,
    XMLSampleService, MetadataValueService, MetadataTemplateService, MetadatafieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
