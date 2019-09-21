import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
    new Quote("I love life", "Admin"),
    new Quote("I love life", "Admin"),
    new Quote("I love life", "Admin"),
    new Quote("I love life", "Admin"),
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

  constructor() { }

  ngOnInit() {
  }

}
