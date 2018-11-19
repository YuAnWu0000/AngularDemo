import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable, fromEvent, from, of } from 'rxjs';
import { switchMap, map, debounceTime, filter } from 'rxjs/operators';
import { AutoCompleteService } from './auto-complete.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [AutoCompleteService]
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {
  
  public keyword;
  public selectItem;
  constructor(private autoCompleteService: AutoCompleteService) { }

  ngOnInit() { }
  ngAfterViewInit(){
    this.keyword = fromEvent(document.querySelector('#search'), 'input')
                  .pipe(
                        filter(e => e.target['value'].length > 0),
                        debounceTime(100),
                        map(e => e.target['value']),
                        switchMap(value => {
                          return from(this.autoCompleteService.getSuggestList(value))
                        }),
                        map(res => res[1])
                        )
                  .subscribe(value => {
                    this.autoCompleteService.renderList(value);
                  })
    this.selectItem = fromEvent(document.querySelector('#suggest-list'), 'click')
                     .pipe(
                            filter(e => (<HTMLTextAreaElement>e.target).matches('li')),
                            map(e => (<HTMLTextAreaElement>e.target).innerText)
                     )
                     .subscribe(text => {
                      (<HTMLTextAreaElement>document.querySelector('#search')).value = text;
                      this.autoCompleteService.renderList([]);
                     })
  }
  
}
