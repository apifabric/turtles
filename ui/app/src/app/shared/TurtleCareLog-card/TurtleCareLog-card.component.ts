import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TurtleCareLog-card.component.html',
  styleUrls: ['./TurtleCareLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TurtleCareLog-card]': 'true'
  }
})

export class TurtleCareLogCardComponent {


}