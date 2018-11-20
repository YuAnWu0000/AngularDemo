import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit, AfterViewInit {

  sortByNumber = 'up';
  sortByTitle = 'up';
  sortByDate = 'up';
  sortByViewnum = 'up';
  sortByCommentnum = 'up';
  sortEvent;
  sortCondition: string = '編號升次';

  constructor(private articleService: ArticleService) { }
  
  ngOnInit() {
  }

  ngAfterViewInit(){
    this.sortEvent = fromEvent(document.querySelectorAll('.sortBtn'), 'click');

    this.sortEvent.subscribe(e => {
      console.log(e.target.value+"sort event");
      this.articleService.setSort(e.target.value);
    });

    this.articleService.sortSubject.subscribe(sortObj => {
      console.log(sortObj);
      if(sortObj.condition === '編號'){
        if(this.sortByNumber === 'up'){
          this.sortByNumber = 'down';
          this.sortCondition = '編號降次';
        }
        else{
          this.sortByNumber = 'up';
          this.sortCondition = '編號升次';
        }
      }
      if(sortObj.condition === '標題'){
        if(this.sortByTitle === 'up'){
          this.sortByTitle = 'down';
          this.sortCondition = '標題降次';
        }
        else{
          this.sortByTitle = 'up';
          this.sortCondition = '標題升次';
        }
      }
      if(sortObj.condition === '日期'){
        if(this.sortByDate === 'up'){
          this.sortByDate = 'down';
          this.sortCondition = '日期降次';
        }
        else{
          this.sortByDate = 'up';
          this.sortCondition = '日期升次';
        }
      }
      if(sortObj.condition === '瀏覽人數'){
        if(this.sortByViewnum === 'up'){
          this.sortByViewnum = 'down';
          this.sortCondition = '瀏覽人數降次';
        }
        else{
          this.sortByViewnum = 'up';
          this.sortCondition = '瀏覽人數升次';
        }
      }
      if(sortObj.condition === '留言人數'){
        if(this.sortByCommentnum === 'up'){
          this.sortByCommentnum = 'down';
          this.sortCondition = '留言人數降次';
        }
        else{
          this.sortByCommentnum = 'up';
          this.sortCondition = '留言人數升次';
        }
      }
    });
  }

}
