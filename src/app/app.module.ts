import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbListModule, NbCardModule, NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import {PagesModule} from './pages/pages.module';
import {NewsModule} from './pages/news/news.module';
import { HttpClientModule } from '@angular/common/http';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
// import { NewsComponent } from './pages/news/news.component';
import {ContactUsModule} from './pages/contact-us/contact-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from './pages/store/store.module';
// import {MenuServiceComponent} from './pages/menu-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    // MenuServiceComponent
    // NewsComponent
  ],
  imports: [
    HttpClientModule,
    NbLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    PagesModule,
    NewsModule,
    StoreModule,
    ContactUsModule,
    NbCardModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            endpoint: '/auth/login',
            method: 'post',
          },
          register: {
            endpoint: '/auth/register',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }),
    NbIconModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
