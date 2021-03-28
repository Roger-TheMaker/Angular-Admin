import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { SecureComponent } from './secure/secure.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', component: SecureComponent
      },
    ],
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: SecureComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
