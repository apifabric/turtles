import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Pond-card.component.html',
  styleUrls: ['./Pond-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Pond-card]': 'true'
  }
})

export class PondCardComponent {


}