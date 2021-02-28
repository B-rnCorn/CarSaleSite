import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-post-placeholder',
  templateUrl: 'product-post-placeholder.component.html',
  styleUrls: ['product-post-placeholder.component.scss'],
})
export class ProductPostPlaceholderComponent {
  @HostBinding('attr.aria-label')
  label = 'Loading';
}
