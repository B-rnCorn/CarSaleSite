import {Component, Input} from '@angular/core';
import {CarPost} from '../state/car.service';
import {SessionQuery} from '../../../auth/state/auth.query';
import {BasketQuery} from '../../basket/state/basket.query';
import {CarModel} from '../../../models/car.model';
import {BasketService} from '../../basket/state/basket.service';

@Component({
  selector: 'app-product-post',
  templateUrl: 'product-post.component.html',
})
export class ProductPostComponent {
  constructor(private sessionQuery: SessionQuery, private basketService: BasketService) {
  }

  @Input() post: CarModel;
  isLoggedIn(): boolean {
    return this.sessionQuery.isLoggedIn();
  }
  buyCar(carModel: CarModel): void{
    this.basketService.add(carModel); // addCar(carModel);
  }
}
