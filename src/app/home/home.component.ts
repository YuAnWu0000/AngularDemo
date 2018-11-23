import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  componentpath: string = "../../assets/images/component_sample.PNG";
  modulepath: string = "../../assets/images/module_sample.PNG";
  routerpath: string = "../../assets/images/router_sample.PNG";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

} 
