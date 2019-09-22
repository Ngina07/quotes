import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
    new Quote(1,"I love life", "Admin", new Date(2012, 8, 17)),
    new Quote(2,"I love life", "Admin", new Date(2012, 8, 17)),
    new Quote(3,"I love life", "Admin", new Date(2012, 8, 17)),
    new Quote(4,"I love life", "Admin", new Date(2012, 8, 17)),
  ];

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
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
