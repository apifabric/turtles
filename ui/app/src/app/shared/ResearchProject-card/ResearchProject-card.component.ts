import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ResearchProject-card.component.html',
  styleUrls: ['./ResearchProject-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ResearchProject-card]': 'true'
  }
})

export class ResearchProjectCardComponent {


}