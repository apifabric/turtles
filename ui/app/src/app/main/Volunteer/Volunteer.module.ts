import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VOLUNTEER_MODULE_DECLARATIONS, VolunteerRoutingModule} from  './Volunteer-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VolunteerRoutingModule
  ],
  declarations: VOLUNTEER_MODULE_DECLARATIONS,
  exports: VOLUNTEER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VolunteerModule { }