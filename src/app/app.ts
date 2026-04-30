import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { SkhangEightball } from './skhang-eightball/skhang-eightball';

@Component({
  selector: 'app-root',
  imports: [PizzaToppings, SkhangEightball],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-components');
}
