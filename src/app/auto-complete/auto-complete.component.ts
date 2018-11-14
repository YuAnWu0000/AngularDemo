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

  public getSuggestList(term){
    return $.ajax({
      url: 'http://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
          action: 'opensearch',
          format: 'json',
          search: term
      }
    }).promise();
  }
  public renderList (list) {
    $('#suggest-list').empty();
    $('#suggest-list').append(list.map(item => '<li>' + item + '</li>'));
  }
  // public searchInput = document.getElementById('search');
  // public suggestList = document.getElementById('suggest-list');
  // public keyword$: Observable<any> = fromEvent(this.searchInput, 'input');
  // public selectItem$: Observable<any> = fromEvent(this.suggestList, 'click');
  public keyword;
  public selectItem;
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit(){
    //this.keyword$.pipe(map(e => e.target.value)).pipe(switchMap(e => this.getSuggestList(e))).subscribe(console.log);
    this.keyword = fromEvent(document.querySelector('#search'), 'input')
                  .pipe(
                        filter(e => e.target['value'].length > 0),
                        debounceTime(100),
                        map(e => e.target['value']),
                        switchMap(value => {
                          return from(this.getSuggestList(value))
                        }),
                        map(res => res[1])
                        )
                  .subscribe(value => {
                    this.renderList(value);
                  })
    this.selectItem = fromEvent(document.querySelector('#suggest-list'), 'click')
                     .pipe(
                            filter(e => (<HTMLTextAreaElement>e.target).matches('li')),
                            map(e => (<HTMLTextAreaElement>e.target).innerText)
                     )
                     .subscribe(text => {
                      (<HTMLTextAreaElement>document.querySelector('#search')).value = text;
                      this.renderList([]);
                     })
  }
  
}
