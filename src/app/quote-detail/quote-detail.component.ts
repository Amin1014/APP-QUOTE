// import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  

  @Input() quoty: Quote | undefined
  @Output() isRead = new EventEmitter<boolean>();
  quote: any;
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }

downvote(){
  this.quote.dislikes+=1;
}
upvote(){
  this.quote.likes+=1;
}
  
  constructor() { }

  
    
  
  ngOnInit() {
  }



}