import { Routes } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdministratorGuard } from './login-basic/administrator.guard';

import { AboutComponent } from './about/about.component';
import { AdminListComponent } from './user/user-list/admin-list.component';
import { AdminDetailComponent } from './user/user-detail/admin-detail.component';
import { AdminCreateComponent } from './user/user-create/admin-create.component';
import { AdminEditComponent } from './user/user-edit/admin-edit.component';
import { AdminDeleteComponent } from './user/user-delete/admin-delete.component';
import { LinguistDeleteComponent } from './user/user-delete/linguist-delete.component';
import { LinguistCreateComponent } from './user/user-create/linguist-create.component';
import { LinguistEditComponent } from './user/user-edit/linguist-edit.component';
import { LinguistListComponent } from './user/user-list/linguist-list.component';
import { LinguistDetailComponent } from './user/user-detail/linguist-detail.component';
import {MetadataValueListComponent} from './metadataValue/metadata-value-list/metadata-value-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admins/new', component: AdminCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [AdministratorGuard] },
  { path: 'admins', component: AdminListComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id', component: AdminDetailComponent, canActivate: [AdministratorGuard] },
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [AdministratorGuard] },
  { path: 'linguists/new', component: LinguistCreateComponent, canActivate: [AdministratorGuard] },
  { path: 'linguists/:id/edit', component: LinguistEditComponent, canActivate: [AdministratorGuard] },
  { path: 'linguists', component: LinguistListComponent, canActivate: [LoggedInGuard] },
  { path: 'linguists/:id', component: LinguistDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'linguists/:id/delete', component: LinguistDeleteComponent, canActivate: [AdministratorGuard] },
  { path: 'metadataValues', component: MetadataValueListComponent},
];
