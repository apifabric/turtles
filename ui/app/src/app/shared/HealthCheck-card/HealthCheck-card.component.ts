import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HealthCheck-card.component.html',
  styleUrls: ['./HealthCheck-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HealthCheck-card]': 'true'
  }
})

export class HealthCheckCardComponent {


}