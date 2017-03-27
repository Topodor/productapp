import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {shopComponent} from './shop/shop.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {shopService} from './common/shop.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService, shopService],
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/about',       component: AboutComponent },
  {path: '/shop', component: shopComponent },
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
