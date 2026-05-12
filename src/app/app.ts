import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { MkhennoufMultiplication } from './mkhennouf-multiplication/mkhennouf-multiplication';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    MkhennoufMultiplication
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
