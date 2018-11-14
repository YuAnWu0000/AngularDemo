import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from './counter.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit, OnDestroy {
  public nowTime = 10;
  public countdown: Subscription;
  constructor(private counterService: CounterService, private router: Router) { }

  ngOnInit() {
    this.countdown = this.counterService.countDown$.subscribe(time=>{
      console.log(time);
      this.nowTime = time;
      if(this.nowTime === 0){
        this.router.navigate(['/home']);
      }
    });  
  }

  ngOnDestroy(){
     this.countdown.unsubscribe();
  }
}
