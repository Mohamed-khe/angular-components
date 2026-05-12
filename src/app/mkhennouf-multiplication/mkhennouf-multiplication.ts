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
  protected readonly multiplicationResult = signal(9);

}
