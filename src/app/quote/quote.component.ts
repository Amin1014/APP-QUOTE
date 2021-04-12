import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  title ='welcome to my quotes app'
  quotes:Quote[] = [
    new Quote (1,'Harry pinero','Inspirational','The way to get started is to quit talking and begin doing.','Walt Disney', new Date(2009,12,7),false),
    new Quote (2,'Filly','Life','If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(1997,7,9),false),
    new Quote (3,'George','Life Experience','In order to write about life first you must live it.','Ernest Hemingway',new Date(2009,5,10),false),
    new Quote (4,'Chunkz','Hate','I like criticism. It makes you strong.','Lebron James',new Date(2013,14,7),false),
    new Quote (5,'Niko','Happiness','The healthiest response to life is joy.','Deepak Chopra',new Date(2014,9,17),false),
    new Quote (6,'Aj shabeel','Religious','True wisdom always leads us to please God.','Anthony DeStefano',new Date(2001,7,15),false)

  ];
  quote: any;


  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  

  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  displayInfo(index: string | number){
  }

  

  constructor() { }

  ngOnInit(): void {
    
    
    
  }

}