import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbUserModule,
} from '@nebular/theme';

import { ProductPostComponent } from './product-post/product-post.component';
import { ProductPostPlaceholderComponent } from './product-post-placeholder/product-post-placeholder.component';
import { CarService } from './state/car.service';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent} from './store.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbUserModule,
    StoreRoutingModule,
    CommonModule
  ],
  declarations: [
    StoreComponent,
    ProductPostPlaceholderComponent,
    ProductPostComponent,
  ],
  providers: [
    CarService,
  ],
  bootstrap: [
    StoreComponent,
  ]
})
export class StoreModule { }
