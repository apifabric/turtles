import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FeedingSchedule-card.component.html',
  styleUrls: ['./FeedingSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FeedingSchedule-card]': 'true'
  }
})

export class FeedingScheduleCardComponent {


}