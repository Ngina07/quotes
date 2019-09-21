import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes:Quote[] = [
    {quote:"I love life", author:"Admin"},
    {quote:"I love life", author:"Admin"},
    {quote:"I love life", author:"Admin"},
    {quote:"I love life", author:"Admin"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
