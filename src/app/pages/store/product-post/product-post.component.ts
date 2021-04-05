import {Component, Input} from '@angular/core';
import {CarPost, CarService} from '../state/car.service';
import {SessionQuery} from '../../../auth/state/auth.query';
import {BasketQuery} from '../../basket/state/basket.query';
import {CarModel} from '../../../models/car.model';
import {BasketService} from '../../basket/state/basket.service';

@Component({
  selector: 'app-product-post',
  templateUrl: 'product-post.component.html',
})
export class ProductPostComponent {
  constructor(private sessionQuery: SessionQuery, private basketService: BasketService, private carService: CarService) {
  }

  @Input() post: CarModel;
  isLoggedIn(): boolean {
    return this.sessionQuery.isLoggedIn();
  }
  buyCar(carModel: CarModel): void{
    this.basketService.add(carModel); // addCar(carModel);
  }
  isAdmin(): boolean{
    return true;
  }
  removeCar(carModel: CarModel): void{
    this.carService.deleteCar(carModel.id.toString());
    console.log('deleted' + carModel.brand);
  }
}
