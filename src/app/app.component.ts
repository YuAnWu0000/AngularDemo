import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //外部以<app-root></app-root>的方式做呼叫
  templateUrl: './app.component.html', //此component的模板
  styleUrls: ['./app.component.scss'] //此component的樣式
})
export class AppComponent {
  constructor() {
    //data injection在此注入
  }
}
