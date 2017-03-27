import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {shop} from '../common/shop.model';
import {shopService} from '../common/shop.service';
import {StateService} from '../common/state.service';
import {shopDetailComponent} from './shop-details/shop.detail.component';

@Component({
  selector: 'shop',
  template: require('./shop.component.html'),
  directives: [shopDetailComponent]
})
export class shopComponent implements OnInit {
  title: string = 'Shop';
  body: string = 'list of products';
  shop: shop[];

  constructor(
    private _stateService: StateService,
    private _shopService: shopService) {}

  ngOnInit() {
    this.shop = this._shopService.getshop();
    
  }

}
