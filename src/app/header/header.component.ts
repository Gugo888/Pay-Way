import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  constructor(public options: OptionsService) { 
  }

  // emitFun() {
  //   this.isDark = !this.isDark;
  //   this.options.eventEmit.emit(this.isDark)

  // }

  changeColor() {
  this.options.isDark = !this.options.isDark
}

  ngOnInit(): void {
  }

}
