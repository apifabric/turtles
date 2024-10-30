import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCheckHomeComponent } from './home/HealthCheck-home.component';
import { HealthCheckNewComponent } from './new/HealthCheck-new.component';
import { HealthCheckDetailComponent } from './detail/HealthCheck-detail.component';

const routes: Routes = [
  {path: '', component: HealthCheckHomeComponent},
  { path: 'new', component: HealthCheckNewComponent },
  { path: ':id', component: HealthCheckDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HealthCheck-detail-permissions'
      }
    }
  }
];

export const HEALTHCHECK_MODULE_DECLARATIONS = [
    HealthCheckHomeComponent,
    HealthCheckNewComponent,
    HealthCheckDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCheckRoutingModule { }