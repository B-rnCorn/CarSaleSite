import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {RegisterComponent} from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    // loadChildren: './auth/auth.module#NgxAuthModule',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule),
    /*
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
        // loadChildren: './auth/auth.module#NgxAuthModule',
        // component: RegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      // Смена пароля
      /*
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],*/
  },
  { path: '', redirectTo: 'pages/news', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
