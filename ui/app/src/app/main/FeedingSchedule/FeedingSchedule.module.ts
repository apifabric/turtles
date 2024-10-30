import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FEEDINGSCHEDULE_MODULE_DECLARATIONS, FeedingScheduleRoutingModule} from  './FeedingSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FeedingScheduleRoutingModule
  ],
  declarations: FEEDINGSCHEDULE_MODULE_DECLARATIONS,
  exports: FEEDINGSCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedingScheduleModule { }