import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { iterator } from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'app-skhang-eightball',
  imports: [MatCardModule, MatButtonModule, MatFormField, MatInputModule],
  templateUrl: './skhang-eightball.html',
  styleUrl: './skhang-eightball.css',
})
export class SkhangEightball {
  protected readonly question = signal('');
  protected readonly answer = signal('');

  protected readonly answers = [
    'it is certain',
    'it is decidely so',
    'without a doubt',
    'yes definitely',
    'you may rely on it',
    'as i see it, yes',
    'most likely',
    'outlook good',
    'yes',
    'signs point to yes',
    'reply hazy, try again',
    'ask again later',
    'better not tell you now',
    'cannot predict now',
    'concentrate and ask again',
    "don't count on it",
    'my sources say no',
    'outlook not so good',
    'very doubtful',
  ];

  protected readonly randAnswer = () => {
    this.answer.set(this.answers[Math.floor(Math.random() * this.answers.length)]);
  };
}
