import { Component} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

   quotes: Quote[] = [
    new Quote(1,"Everything has beauty, but not everyone sees it", "Confucious","Anon", new Date(2019, 5, 17)),
    new Quote(2,"Beauty begins the moment you decide to be yourself", "Coco Chanel","Admin", new Date(2019, 8, 7)),
    new Quote(3,"It’s lovely to know that the world can’t interfere with the inside of your head.", "Frank McCourt","Dr.Seus", new Date(2019, 8, 27)),
    new Quote(4,"Nobody is superior, nobody is inferior, but nobody is equal either. People are simply unique, incomparable. You are you. I am I.", "Osho","Admin", new Date(2019, 6, 17)),
  ];

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
    console.log(quote.id)
  }

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }
  
  constructor() { }

}
