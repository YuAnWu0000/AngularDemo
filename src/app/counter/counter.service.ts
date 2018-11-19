import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countDown$: Observable<any>;
  constructor() { 
    this.countDown$ = Observable.create((observer: Observer<any>)=>{
      // for(let i=0; i<100; i++){
      //   setTimeout(()=>{
      //     observer.next(10 - i);
      //     if(i === 10){ //如果還沒到10就會繼續丟next，即使頁面跳轉(CounterComponent已經Destroy)也一樣
      //       observer.complete(); 
      //     }
      //   }, i * 1000);
      // }
      let count = 10;
      observer.next(count--);
      setInterval(()=>observer.next(count--), 1000);
    })
  }
  
}
