import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchProjectHomeComponent } from './home/ResearchProject-home.component';
import { ResearchProjectNewComponent } from './new/ResearchProject-new.component';
import { ResearchProjectDetailComponent } from './detail/ResearchProject-detail.component';

const routes: Routes = [
  {path: '', component: ResearchProjectHomeComponent},
  { path: 'new', component: ResearchProjectNewComponent },
  { path: ':id', component: ResearchProjectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ResearchProject-detail-permissions'
      }
    }
  }
];

export const RESEARCHPROJECT_MODULE_DECLARATIONS = [
    ResearchProjectHomeComponent,
    ResearchProjectNewComponent,
    ResearchProjectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchProjectRoutingModule { }