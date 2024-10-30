import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Volunteer-new',
  templateUrl: './Volunteer-new.component.html',
  styleUrls: ['./Volunteer-new.component.scss']
})
export class VolunteerNewComponent {
  @ViewChild("VolunteerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}