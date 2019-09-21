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

  constructor() { }

  ngOnInit() {
  }

}
