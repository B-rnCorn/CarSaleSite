import { Component} from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent{
  card = {
    products: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private productService: ProductService) {}
  loadNext(cardData): void {
    if (cardData.loading) { return; }

    cardData.loading = true;
    console.log(cardData);
    cardData.placeholders = new Array(this.pageSize);
    this.productService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextProduct => {
        console.log(cardData);
        cardData.placeholders = [];
        cardData.products.push(...nextProduct);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }
}
