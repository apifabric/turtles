import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Turtle-new',
  templateUrl: './Turtle-new.component.html',
  styleUrls: ['./Turtle-new.component.scss']
})
export class TurtleNewComponent {
  @ViewChild("TurtleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}