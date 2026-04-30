import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-skhang-eightball',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatInputModule],
  templateUrl: './skhang-eightball.html',
  styleUrl: './skhang-eightball.css',
})
export class SkhangEightball {}
