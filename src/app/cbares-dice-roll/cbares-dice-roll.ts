import { Component, signal, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cbares-dice-roll',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './cbares-dice-roll.html',
  styleUrl: './cbares-dice-roll.css',
})
export class CbaresDiceRoll {
  protected readonly numDice = signal(1);
  protected readonly results : WritableSignal<{result: number, rolled: boolean}[]> = signal([
    {
      result: 0,
      rolled: false
    }
  ]);

  protected readonly rollDice = () => this.results.update(
    currentResults => currentResults.map(
      x => ({
        result: Math.ceil(Math.random() * 6),
        rolled: true
      })
    )
  )
}
