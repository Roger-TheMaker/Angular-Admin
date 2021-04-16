import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';

@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    DashboardComponent,
    UsersComponent,
    ProfileComponent,
    UserCreateComponent,
    UserEditComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent],
    exports: [
      SecureComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecureModule { }
