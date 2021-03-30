import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from './state/car.service';
import {CarQuery} from './state/car.query';
import {SessionQuery} from '../../auth/state/auth.query';
import {CarStore} from './state/car.store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {
  card = {
    products: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private carQuery: CarQuery, private  carService: CarService, private sessionQuery: SessionQuery) {
  }

  loadNext(cardData): void {
    if (cardData.loading) {
      return;
    }
    cardData.loading = true;
    console.log(cardData);
    cardData.placeholders = new Array(this.pageSize);
    console.log(this.carQuery.hasEntity());
    this.carQuery.selectAll()
      .subscribe(nextProduct => {
        console.log(cardData);
        cardData.placeholders = [];
        cardData.products.push(...nextProduct);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  ngOnInit(): void {
    this.carService.load().subscribe();
  }

  ngOnDestroy(): void {
    this.carService.clearStore();
  }
  isLoggedIn(): boolean{
    return this.sessionQuery.isLoggedIn();
  }
  getLoggedUserName(): string{
    console.log(this.sessionQuery.getLoggedUser().first_name);
    return this.sessionQuery.getLoggedUser().first_name;
  }
}
