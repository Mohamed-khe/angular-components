import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-thamilton-roll-d20',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatInputModule, MatAnchor],
  templateUrl: './thamilton-roll-d20.html',
  styleUrl: './thamilton-roll-d20.css',
})
export class ThamiltonRollD20 {
  protected readonly rollD20 = () => {};

  protected readonly numberOne = signal(2);
  protected readonly numberTwo = signal(2);
  protected readonly sum = signal(4);

  protected readonly updateNumberOne = (num: string) => this.numberOne.set(Number(num));
  protected readonly updateNumberTwo = (num: string) => this.numberTwo.set(Number(num));

  protected readonly add = () => this.sum.set(this.numberOne() + this.numberTwo());
}
