import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurtleCareLogHomeComponent } from './home/TurtleCareLog-home.component';
import { TurtleCareLogNewComponent } from './new/TurtleCareLog-new.component';
import { TurtleCareLogDetailComponent } from './detail/TurtleCareLog-detail.component';

const routes: Routes = [
  {path: '', component: TurtleCareLogHomeComponent},
  { path: 'new', component: TurtleCareLogNewComponent },
  { path: ':id', component: TurtleCareLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TurtleCareLog-detail-permissions'
      }
    }
  }
];

export const TURTLECARELOG_MODULE_DECLARATIONS = [
    TurtleCareLogHomeComponent,
    TurtleCareLogNewComponent,
    TurtleCareLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurtleCareLogRoutingModule { }