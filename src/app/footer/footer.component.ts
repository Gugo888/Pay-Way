import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public options: OptionsService) { }

  ngOnInit(): void {
  }

  rating: boolean[] = [false, false, false, false, false];

  setRating(n: number) {

    for(let i = 0; i < this.rating.length; i++) {
      if (i <= n) {
        this.rating[i] = true;
      } else {
        this.rating[i] = false;
      }
    }
  }

  scrollTo() {
    window.scrollTo(0,0)
  }

}
