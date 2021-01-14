import { Component } from '@angular/core';

export interface Indicator {
  status: boolean;
  show: boolean;
  name: string;
  ind:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  indicators: Indicator[] = [
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
    { status: Math.random() <= 0.5, name:"Датчик", show: true },
  ];
   createInd(ind) {
    this.indicators.push({name: ind, status: Math.random() <= 0.5, show: true})
  }
}
