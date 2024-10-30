import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SUPPLYINVENTORY_MODULE_DECLARATIONS, SupplyInventoryRoutingModule} from  './SupplyInventory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SupplyInventoryRoutingModule
  ],
  declarations: SUPPLYINVENTORY_MODULE_DECLARATIONS,
  exports: SUPPLYINVENTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupplyInventoryModule { }