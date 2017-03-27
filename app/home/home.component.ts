import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Home is working!';
  body:  string = ' ';
 
  constructor(private _stateService: StateService) { }

  ngOnInit() {

  }
}
