import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CarStore, CarState } from './car.store';

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends QueryEntity<CarState> {

  constructor(protected store: CarStore) {
    super(store);
  }
}
