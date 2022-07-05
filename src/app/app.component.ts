import { Component } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-common-js';

  constructor() {
    console.warn(_.uniq([2, 1, 2]));
  }
}
