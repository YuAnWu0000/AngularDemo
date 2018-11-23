import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() imagepath: string;
  @Input() title: string;
  private path: string;
  closeResult: string; 
  
  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg'});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  
  }

  ngOnChanges(){
    
  }

  ngAfterViewInit(){
    this.path = this.imagepath;
    let i = 0;
    console.log(i++);
  }
  

}
