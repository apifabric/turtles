import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HealthCheck-new',
  templateUrl: './HealthCheck-new.component.html',
  styleUrls: ['./HealthCheck-new.component.scss']
})
export class HealthCheckNewComponent {
  @ViewChild("HealthCheckForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}