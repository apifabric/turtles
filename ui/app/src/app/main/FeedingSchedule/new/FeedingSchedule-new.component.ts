import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FeedingSchedule-new',
  templateUrl: './FeedingSchedule-new.component.html',
  styleUrls: ['./FeedingSchedule-new.component.scss']
})
export class FeedingScheduleNewComponent {
  @ViewChild("FeedingScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}