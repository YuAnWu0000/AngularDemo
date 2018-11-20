import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  sortObj = {
    condition: '',
    flag: true //true: up; false: down
  }

  sortSubject = new Subject<any>();
  
  constructor() { }

  setSort(_condition: string){
    this.sortObj.condition = _condition;
    this.sortObj.flag = !this.sortObj.flag;
    this.sortSubject.next(this.sortObj);
  }
}
