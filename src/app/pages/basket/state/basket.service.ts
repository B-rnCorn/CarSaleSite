import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {delay, map, mapTo, tap} from 'rxjs/operators';
import {BasketStore} from './basket.store';
import {CarModel} from '../../../models/car.model';
import {BasketQuery} from './basket.query';

export class BasketPost {
  brand: string;
  model: string;
  engineCapacity: number;
  enginePower: number;
  vin: string;
  year: number;
  bodyType: string;
  color: string;
  price: number;
  manager: string;
  customerId: number;
  link: string;
}

const headerDict = {
  body: '',
  Accept: 'application/json',
  'Access-Control-Allow-Headers': '*',
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};


@Injectable({providedIn: 'root'})
export class BasketService {
  constructor(private basketStore: BasketStore, private http: HttpClient) {
  }
  /* load(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>('http://localhost:3001/'/*, {headers: new HttpHeaders(headerDict)}).pipe(
      tap(cars => {
        this.basketStore.set(cars);
      })
    );
  }*/
  add(carModel: CarModel): void{
    this.basketStore.add(carModel);
  }
  addCar(carModel: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>('/api/cars', carModel).pipe(
      tap(value => {
        this.basketStore.add([value]);
      })
    );
  }
  delete(carId: string): void {
    this.basketStore.remove(carId);
  }
  deleteCar(carId: string): Observable<any> {
    return this.http.delete('/api/cars/' + carId).pipe(
      tap(result => {
        this.basketStore.remove(carId);
      })
    );
  }

  updateCar(carId: string, carModel: CarModel): Observable<any> {
    return this.http.put('/api/cars/' + carId, carModel).pipe(
      tap(result => {
        this.basketStore.update(carId, carModel);
      })
    );
  }

  clearBasket(): void {
    this.basketStore.remove();
  }
}
