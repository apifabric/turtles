import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Pond-new',
  templateUrl: './Pond-new.component.html',
  styleUrls: ['./Pond-new.component.scss']
})
export class PondNewComponent {
  @ViewChild("PondForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}