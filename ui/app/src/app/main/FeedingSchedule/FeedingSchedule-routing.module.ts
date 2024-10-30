import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedingScheduleHomeComponent } from './home/FeedingSchedule-home.component';
import { FeedingScheduleNewComponent } from './new/FeedingSchedule-new.component';
import { FeedingScheduleDetailComponent } from './detail/FeedingSchedule-detail.component';

const routes: Routes = [
  {path: '', component: FeedingScheduleHomeComponent},
  { path: 'new', component: FeedingScheduleNewComponent },
  { path: ':id', component: FeedingScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FeedingSchedule-detail-permissions'
      }
    }
  }
];

export const FEEDINGSCHEDULE_MODULE_DECLARATIONS = [
    FeedingScheduleHomeComponent,
    FeedingScheduleNewComponent,
    FeedingScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedingScheduleRoutingModule { }