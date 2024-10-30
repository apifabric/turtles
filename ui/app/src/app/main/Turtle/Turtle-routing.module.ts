import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurtleHomeComponent } from './home/Turtle-home.component';
import { TurtleNewComponent } from './new/Turtle-new.component';
import { TurtleDetailComponent } from './detail/Turtle-detail.component';

const routes: Routes = [
  {path: '', component: TurtleHomeComponent},
  { path: 'new', component: TurtleNewComponent },
  { path: ':id', component: TurtleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Turtle-detail-permissions'
      }
    }
  },{
    path: ':turtle_id/AdoptionApplication', loadChildren: () => import('../AdoptionApplication/AdoptionApplication.module').then(m => m.AdoptionApplicationModule),
    data: {
        oPermission: {
            permissionId: 'AdoptionApplication-detail-permissions'
        }
    }
},{
    path: ':turtle_id/FeedingSchedule', loadChildren: () => import('../FeedingSchedule/FeedingSchedule.module').then(m => m.FeedingScheduleModule),
    data: {
        oPermission: {
            permissionId: 'FeedingSchedule-detail-permissions'
        }
    }
},{
    path: ':turtle_id/HealthCheck', loadChildren: () => import('../HealthCheck/HealthCheck.module').then(m => m.HealthCheckModule),
    data: {
        oPermission: {
            permissionId: 'HealthCheck-detail-permissions'
        }
    }
},{
    path: ':turtle_id/TurtleCareLog', loadChildren: () => import('../TurtleCareLog/TurtleCareLog.module').then(m => m.TurtleCareLogModule),
    data: {
        oPermission: {
            permissionId: 'TurtleCareLog-detail-permissions'
        }
    }
}
];

export const TURTLE_MODULE_DECLARATIONS = [
    TurtleHomeComponent,
    TurtleNewComponent,
    TurtleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurtleRoutingModule { }