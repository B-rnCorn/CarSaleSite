import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbListModule,
  NbCardModule,
  NbIconModule,
  NbAlertModule, NbCheckboxModule, NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import {PagesModule} from './pages/pages.module';
import {NewsModule} from './pages/news/news.module';
import { HttpClientModule } from '@angular/common/http';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
// import { NewsComponent } from './pages/news/news.component';
import {ContactUsModule} from './pages/contact-us/contact-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from './pages/store/store.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
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
    /*
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            endpoint: '/auth/login',
            method: 'post',
            redirect: {
              success: '/news',
              failure: null,
            }
          },
          register: {
            endpoint: '/auth/register',
            method: 'post',
            redirect: {
              success: '/news',
              failure: null,
            }
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          }
        }),
      ],
      forms: {},
    }),*/
    NbIconModule,
    NgbModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    NbAuthModule,
    NbAlertModule,
    NbCheckboxModule,
    FormsModule,
    NbInputModule,
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
