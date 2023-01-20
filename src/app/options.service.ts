import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  isDark: boolean = false;
  // emmit : EventEmitter<boolean> = true
public eventEmit!: any
  constructor() { 
    this.eventEmit = new EventEmitter<boolean>()
  }
}
