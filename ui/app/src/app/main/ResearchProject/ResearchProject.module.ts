import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESEARCHPROJECT_MODULE_DECLARATIONS, ResearchProjectRoutingModule} from  './ResearchProject-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResearchProjectRoutingModule
  ],
  declarations: RESEARCHPROJECT_MODULE_DECLARATIONS,
  exports: RESEARCHPROJECT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResearchProjectModule { }