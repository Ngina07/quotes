import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {quote:"I love life"},
    {quote:"I love life"},
    {quote:"I love life"},
    {quote:"I love life"},
  ];
}
