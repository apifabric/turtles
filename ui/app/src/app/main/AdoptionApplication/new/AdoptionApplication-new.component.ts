import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AdoptionApplication-new',
  templateUrl: './AdoptionApplication-new.component.html',
  styleUrls: ['./AdoptionApplication-new.component.scss']
})
export class AdoptionApplicationNewComponent {
  @ViewChild("AdoptionApplicationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}