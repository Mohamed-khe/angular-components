import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

}
