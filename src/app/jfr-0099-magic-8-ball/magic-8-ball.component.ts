import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-magic-8-ball',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './magic-8-ball.component.html',
  styleUrl: './magic-8-ball.component.css',
})
export class Magic8BallComponent {

  
}
