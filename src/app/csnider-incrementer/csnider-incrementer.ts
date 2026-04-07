import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-csnider-incrementer',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './csnider-incrementer.html',
  styleUrl: './csnider-incrementer.css',
})

export class CsniderIncrementer {
  count = signal(0);
  increment = signal(1);

  setIncrement = (event:Event) => {
    this.increment.set(Number((event.target as HTMLInputElement).value));
  }

  incrementCount = (event:Event) => {
    this.count.update(value => value + this.increment())
  }

  decrementCount = (event:Event) => {
    this.count.update(value => value - this.increment())
  }

  resetValues = (event:Event) => {
    this.count.set(0);
    this.increment.set(1);
  } 
}