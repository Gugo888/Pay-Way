import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OptionsService } from './options.service';
// import {ngOnChanges} from 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = true;
  constructor(public options: OptionsService) {
  }


}
