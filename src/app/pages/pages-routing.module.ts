import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {NewsComponent} from './news/news.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {StoreComponent} from './store/store.component';
import {FormComponent} from './form/form.component';
import {BasketComponent} from './basket/basket.component';
import {AdminGuard} from '../auth/guards/admin-guard';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'news',
      component : NewsComponent,
      // loadChildren: () => import('./news/news.module')
      //  .then(m => m.NewsModule),
    },
    {
      path: 'contact-us',
      component : ContactUsComponent
    },
    {
      path: 'store',
      component : StoreComponent
    },
    {
      path: 'basket',
      component: BasketComponent
    },
    {
      path:  'admin-dashboard',
      // component
      component : ContactUsComponent,
      canActivate: [AdminGuard],
      canLoad: [AdminGuard],
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class PagesRoutingModule {
}
