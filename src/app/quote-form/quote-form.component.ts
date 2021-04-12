import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
  
})
export class QuoteFormComponent implements OnInit {
quoted = new Quote(0, "", "", "", "", new Date(),false)
@Output() add = new EventEmitter<Quote>();

addQuote(){
  this.add.emit(this.quoted)
  this.quoted = new Quote (0, "", "", "", "", new Date(),false);
}
  constructor() { }

  ngOnInit(): void {
  }

}
