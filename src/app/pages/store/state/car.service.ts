import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {delay, map, mapTo, tap} from 'rxjs/operators';
import {CarStore} from './car.store';
import {CarModel} from '../../../models/car.model';
import {CarQuery} from './car.query';
import {withTransaction} from '@datorama/akita';

const TOTAL_PAGES = 3;

export class CarPost {
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


@Injectable()
export class CarService {
  constructor(private carStore: CarStore, private http: HttpClient) {
  }
  load(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(/*'http://localhost:8080/dealership/cars'*/'http://localhost:3001/'/*, {headers: new HttpHeaders(headerDict)}*/).pipe(
      tap(cars => {
        this.carStore.set(cars);
      })
    );
  }

  createCar(carModel: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>('/api/cars', carModel).pipe(
      tap(value => {
        this.carStore.add([value]);
      })
    );
  }

  delete(carId: string): void {
    this.carStore.remove(carId);
  }
  deleteCar(carId: string): Observable<any> {
    return this.http.delete('/api/cars/' + carId).pipe(
      tap(result => {
        this.carStore.remove(carId);
      })
    );
  }

  updateCar(carId: string, carModel: CarModel): Observable<any> {
    return this.http.put('/api/cars/' + carId, carModel).pipe(
      tap(result => {
        this.carStore.update(carId, carModel);
      })
    );
  }

  clearStore(): void {
    this.carStore.remove();
  }
}
