import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';


import { ContactUsComponent } from './contact-us.component';
import {PagesRoutingModule} from '../pages-routing.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    PagesRoutingModule,
  ],
  declarations: [
    ContactUsComponent,
  ],
  providers: [],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule {}
