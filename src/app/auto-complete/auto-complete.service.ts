import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

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
  constructor() { }
}
