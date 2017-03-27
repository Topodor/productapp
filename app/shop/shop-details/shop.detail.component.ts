import {Component, Input} from '@angular/core';
import {shop} from '../../common/shop.model';

@Component({
  selector: 'shop',
  template: require('./shop.detail.component.html'),
  styles: [`
    .shop {
    cursor: pointer;
    outline: 1;
    padding: 5px;
    margin: 5px;
    background-color: rgba(0, 150, 75, 0.35);
}
  `]
})

export class shopDetailComponent {
  @Input() shop: shop;


}
