import {CarModel} from '../../../models/car.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface CarState extends EntityState<CarModel> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'cars'})
export class CarStore extends EntityStore<CarState, CarModel> {
  constructor() {
    super();
  }
}
