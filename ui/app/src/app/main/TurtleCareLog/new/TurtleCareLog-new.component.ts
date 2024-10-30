import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TurtleCareLog-new',
  templateUrl: './TurtleCareLog-new.component.html',
  styleUrls: ['./TurtleCareLog-new.component.scss']
})
export class TurtleCareLogNewComponent {
  @ViewChild("TurtleCareLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}