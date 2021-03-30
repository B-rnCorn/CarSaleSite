import {Component, Input} from '@angular/core';
import {CarPost} from '../state/car.service';
import {SessionQuery} from '../../../auth/state/auth.query';

@Component({
  selector: 'app-product-post',
  templateUrl: 'product-post.component.html',
})
export class ProductPostComponent {
  constructor(private sessionQuery: SessionQuery) {
  }

  @Input() post: CarPost;

  isLoggedIn(): boolean {
    return this.sessionQuery.isLoggedIn();
  }
}
