import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ResearchProject-new',
  templateUrl: './ResearchProject-new.component.html',
  styleUrls: ['./ResearchProject-new.component.scss']
})
export class ResearchProjectNewComponent {
  @ViewChild("ResearchProjectForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}