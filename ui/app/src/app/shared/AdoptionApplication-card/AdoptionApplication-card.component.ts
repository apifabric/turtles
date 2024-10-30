import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AdoptionApplication-card.component.html',
  styleUrls: ['./AdoptionApplication-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AdoptionApplication-card]': 'true'
  }
})

export class AdoptionApplicationCardComponent {


}