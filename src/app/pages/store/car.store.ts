import { CarModel } from '../../models/car.model';
import { EntityState, EntityStore } from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface CarState extends EntityState<CarModel> {}
@Injectable({
  providedIn: 'root'
})
export class CarStore extends EntityStore<CarState, CarModel> {
  constructor() {
    super();
  }
  loadCars(cars: CarModel[], areCarsLoaded: boolean) {
    this.set(cars);
    this.update(state => ({
      ...state,
      areCarsLoaded
    }));
  }
}
