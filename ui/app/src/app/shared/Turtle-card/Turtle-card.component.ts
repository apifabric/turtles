import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Turtle-card.component.html',
  styleUrls: ['./Turtle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Turtle-card]': 'true'
  }
})

export class TurtleCardComponent {


}