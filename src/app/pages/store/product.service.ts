import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {delay, map, mapTo, tap} from 'rxjs/operators';
import {CarStore} from './car.store';
import {CarModel} from '../../models/car.model';
import {testData} from './testData';

const TOTAL_PAGES = 3;
export class CarPost {
  name: string;
  link: string;
  licencePlate: string;
  cost: number;
}

@Injectable()
export class ProductService {
  constructor(
    private productsStore: CarStore
  ) {
  }

  fakeHttp(): Observable<CarModel[]> {
    return timer(200).pipe(mapTo(testData));
  }

  load(page: number, pageSize: number): Observable<CarModel[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.fakeHttp().pipe(tap(entities => this.productsStore.set(entities)));
  }
}
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const TOTAL_PAGES = 7;
export class ProductPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<ProductPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<ProductPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}*/
