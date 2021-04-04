import {CarModel} from '../../../models/car.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {SessionQuery} from '../../../auth/state/auth.query';
import {BasketQuery} from './basket.query';
import {BasketService} from './basket.service';

export interface BasketState extends EntityState<CarModel> {
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({name: 'basketCars'})
export class BasketStore extends EntityStore<BasketState, CarModel> {
  constructor() {
    super();
  }
}
