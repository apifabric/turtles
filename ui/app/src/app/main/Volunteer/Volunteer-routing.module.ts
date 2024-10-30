import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerHomeComponent } from './home/Volunteer-home.component';
import { VolunteerNewComponent } from './new/Volunteer-new.component';
import { VolunteerDetailComponent } from './detail/Volunteer-detail.component';

const routes: Routes = [
  {path: '', component: VolunteerHomeComponent},
  { path: 'new', component: VolunteerNewComponent },
  { path: ':id', component: VolunteerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Volunteer-detail-permissions'
      }
    }
  }
];

export const VOLUNTEER_MODULE_DECLARATIONS = [
    VolunteerHomeComponent,
    VolunteerNewComponent,
    VolunteerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }