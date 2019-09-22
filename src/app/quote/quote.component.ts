import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
    new Quote(1,"I love life", "Admin", new Date(2019, 5, 17)),
    new Quote(2,"I love life", "Admin", new Date(2019, 8, 7)),
    new Quote(3,"I love life", "Admin", new Date(2019, 8, 27)),
    new Quote(4,"I love life", "Admin", new Date(2019, 6, 17)),
  ];

  // showDetail= false;

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      
      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
