import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {CarStore, CarState} from './car.store';


@Injectable({providedIn: 'root'})
export class CarQuery extends QueryEntity<CarState> {
  constructor(protected carStore: CarStore) {
    super(carStore);
  }
}
