import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionApplicationHomeComponent } from './home/AdoptionApplication-home.component';
import { AdoptionApplicationNewComponent } from './new/AdoptionApplication-new.component';
import { AdoptionApplicationDetailComponent } from './detail/AdoptionApplication-detail.component';

const routes: Routes = [
  {path: '', component: AdoptionApplicationHomeComponent},
  { path: 'new', component: AdoptionApplicationNewComponent },
  { path: ':id', component: AdoptionApplicationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AdoptionApplication-detail-permissions'
      }
    }
  }
];

export const ADOPTIONAPPLICATION_MODULE_DECLARATIONS = [
    AdoptionApplicationHomeComponent,
    AdoptionApplicationNewComponent,
    AdoptionApplicationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptionApplicationRoutingModule { }