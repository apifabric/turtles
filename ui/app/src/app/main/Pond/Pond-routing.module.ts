import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PondHomeComponent } from './home/Pond-home.component';
import { PondNewComponent } from './new/Pond-new.component';
import { PondDetailComponent } from './detail/Pond-detail.component';

const routes: Routes = [
  {path: '', component: PondHomeComponent},
  { path: 'new', component: PondNewComponent },
  { path: ':id', component: PondDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Pond-detail-permissions'
      }
    }
  }
];

export const POND_MODULE_DECLARATIONS = [
    PondHomeComponent,
    PondNewComponent,
    PondDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PondRoutingModule { }