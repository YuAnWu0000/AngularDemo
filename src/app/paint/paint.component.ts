import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { tap, flatMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit, AfterViewInit {
  
  private canvas;
  private ctx;
  private draw(e){
    console.log(e);
    this.ctx.lineTo(e.clientX,e.clientY); // 移到滑鼠在的位置
    this.ctx.stroke(); // 畫畫
  }
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.canvas = document.getElementById('imgCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.beginPath(); // 開始畫畫
  
    fromEvent(this.canvas, 'mousedown').pipe(
      tap(e => {
        console.log(e);
        this.ctx.moveTo((<MouseEvent>e).clientX, (<MouseEvent>e).clientY);
      }),
      flatMap(e => 
        fromEvent(this.canvas, 'mousemove').pipe(
          takeUntil(fromEvent(this.canvas, 'mouseup'))
        )
      )
    )
    .subscribe(e => {
      this.draw(e);
    })
  }

}
