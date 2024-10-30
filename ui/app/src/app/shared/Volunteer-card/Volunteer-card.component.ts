import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Volunteer-card.component.html',
  styleUrls: ['./Volunteer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Volunteer-card]': 'true'
  }
})

export class VolunteerCardComponent {


}