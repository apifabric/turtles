import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HEALTHCHECK_MODULE_DECLARATIONS, HealthCheckRoutingModule} from  './HealthCheck-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HealthCheckRoutingModule
  ],
  declarations: HEALTHCHECK_MODULE_DECLARATIONS,
  exports: HEALTHCHECK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthCheckModule { }