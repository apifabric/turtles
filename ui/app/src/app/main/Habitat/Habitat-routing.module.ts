import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitatHomeComponent } from './home/Habitat-home.component';
import { HabitatNewComponent } from './new/Habitat-new.component';
import { HabitatDetailComponent } from './detail/Habitat-detail.component';

const routes: Routes = [
  {path: '', component: HabitatHomeComponent},
  { path: 'new', component: HabitatNewComponent },
  { path: ':id', component: HabitatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Habitat-detail-permissions'
      }
    }
  }
];

export const HABITAT_MODULE_DECLARATIONS = [
    HabitatHomeComponent,
    HabitatNewComponent,
    HabitatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitatRoutingModule { }