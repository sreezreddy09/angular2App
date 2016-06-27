import { Component } from '@angular/core';

import { RestaurentComponent } from './restaurent/restaurent.component';

@Component({
  selector: 'top-heading',
  template: '<h1 class = "info">Top Rated Amenities In and Around &nbsp; <span [style.color] = "mycolor"> {{title}}</span></h1>',
  directives : [RestaurentComponent]
})
export class AppComponent {
  title = "Los Angeles - CA";
  mycolor = "#44b244";
 }
