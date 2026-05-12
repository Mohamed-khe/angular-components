import { Component, signal } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { S } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-mkhennouf-multiplication',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
],
  templateUrl: './mkhennouf-multiplication.html',
  styleUrl: './mkhennouf-multiplication.css',
})
export class MkhennoufMultiplication {

  protected readonly numberOne = signal(3);
  protected readonly numberTwo = signal(3);
  protected readonly product = signal(9);

  protected readonly updateNumberOne = (num: string) => this.numberOne.set(Number(num));
  protected readonly updateNumberTwo = (num: string) => this.numberOne.set(Number(num));

  protected readonly multiply = () => this.product.set(this.numberOne() * this.numberTwo())

}
