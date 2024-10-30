import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SupplyInventory-new',
  templateUrl: './SupplyInventory-new.component.html',
  styleUrls: ['./SupplyInventory-new.component.scss']
})
export class SupplyInventoryNewComponent {
  @ViewChild("SupplyInventoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}