import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TURTLECARELOG_MODULE_DECLARATIONS, TurtleCareLogRoutingModule} from  './TurtleCareLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TurtleCareLogRoutingModule
  ],
  declarations: TURTLECARELOG_MODULE_DECLARATIONS,
  exports: TURTLECARELOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TurtleCareLogModule { }