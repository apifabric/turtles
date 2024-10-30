import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ADOPTIONAPPLICATION_MODULE_DECLARATIONS, AdoptionApplicationRoutingModule} from  './AdoptionApplication-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AdoptionApplicationRoutingModule
  ],
  declarations: ADOPTIONAPPLICATION_MODULE_DECLARATIONS,
  exports: ADOPTIONAPPLICATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdoptionApplicationModule { }