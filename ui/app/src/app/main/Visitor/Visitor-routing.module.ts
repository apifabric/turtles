import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorHomeComponent } from './home/Visitor-home.component';
import { VisitorNewComponent } from './new/Visitor-new.component';
import { VisitorDetailComponent } from './detail/Visitor-detail.component';

const routes: Routes = [
  {path: '', component: VisitorHomeComponent},
  { path: 'new', component: VisitorNewComponent },
  { path: ':id', component: VisitorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Visitor-detail-permissions'
      }
    }
  }
];

export const VISITOR_MODULE_DECLARATIONS = [
    VisitorHomeComponent,
    VisitorNewComponent,
    VisitorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }