import { Component, OnInit } from '@angular/core';
import {CarQuery} from '../store/state/car.query';
import {CarService} from '../store/state/car.service';
import {SessionQuery} from '../../auth/state/auth.query';
import {BasketQuery} from './state/basket.query';
import {BasketService} from './state/basket.service';
import {Observable} from 'rxjs';
import {CarModel} from '../../models/car.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: []
})
export class BasketComponent implements OnInit {

  card = {
    products: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  basketCars: CarModel[];
  basketLoad = false;
  constructor(private basketServise: BasketService, private basketQuery: BasketQuery, private sessionQuery: SessionQuery) { }
  load(): void {
    // console.log(cardData);
    // cardData.placeholders = new Array(this.basketQuery.getCount());
    console.log(this.basketQuery.hasEntity());
    this.basketCars = this.basketQuery.getAll();
    if (this.basketCars.length > 0){
      this.basketLoad = true;
    }else{
      this.basketLoad = false;
    }
    // basket.click();
    /*this.basketQuery.selectAll()
      .subscribe(nextProduct => {
        console.log(cardData);
        cardData.placeholders = [];
        cardData.products.push(...nextProduct);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });*/
  }
  removeFromBasket(id): void{
    this.basketServise.delete(id);
    this.load();
  }
  ngOnInit(): void {
    this.load();
  }
  isLoggedIn(): boolean {
    return this.sessionQuery.isLoggedIn();
  }
  isBasketLoaded(): boolean{
    return this.basketLoad;
  }
}
