import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit{
  title: string = 'About Page is Working!';
  body:  string = ' ';
 

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    
  }

}
