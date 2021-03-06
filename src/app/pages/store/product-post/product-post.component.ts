import { Component, Input } from '@angular/core';

import { CarPost } from '../product.service';

@Component({
  selector: 'app-product-post',
  templateUrl: 'product-post.component.html',
})
export class ProductPostComponent {
  @Input() post: CarPost;
}
