import {Injectable} from '@angular/core';
import {shop} from './shop.model';
import {PRODS} from './mock-prods';


@Injectable()
export class shopService {
  private shop: shop[] = PRODS;

  getshop(): shop[] {
    return this.shop;
  };


}
