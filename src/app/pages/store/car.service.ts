import {Injectable} from '@angular/core';
import {CarStore} from './car.store';
import {map, mapTo, tap} from 'rxjs/operators';
import {Observable, timer} from 'rxjs';

import {CarModel} from '../../models/car.model';
import {testData} from './testData';

@Injectable({providedIn: 'root'})
export class CarService {

  constructor(
    private productsStore: CarStore
  ) {
  }

  fakeHttp(): Observable<CarModel[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadProducts() {
    return this.fakeHttp().pipe(tap(entities => this.productsStore.set(entities)));
  }

  loadRecommendedProducts(): Observable<CarModel[]> {
    return this.fakeHttp().pipe(
      map(res => res.slice(0, 3)),
      tap(entities => this.productsStore.set(entities))
    );
  }

  clearStore(): void {
    this.productsStore.remove();
  }
}
