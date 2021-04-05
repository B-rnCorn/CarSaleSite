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


import { NewsComponent } from './news.component';
import {PagesRoutingModule} from '../pages-routing.module';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';



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
    NgbModule,
    NgbCarouselModule
  ],
  declarations: [
    NewsComponent,
  ],
  providers: [],
  exports: [
    NewsComponent,
  ],
  bootstrap: [
    NewsComponent,
  ]
})
export class NewsModule {}
