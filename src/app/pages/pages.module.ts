import { NgModule } from '@angular/core';
import {NbLayoutModule, NbMenuItem, NbMenuModule, NbSidebarModule} from '@nebular/theme';

// import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NewsComponent } from './news/news.component';
import {NewsModule} from './news/news.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StoreComponent } from './store/store.component';
// import {ThemeModule} from '../@theme/theme.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    // ThemeModule,
    NbMenuModule,
    NewsModule,
    // ThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    /*
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,*/
  ],
  declarations: [
    PagesComponent,
    StoreComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule {
}
