import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplyInventoryHomeComponent } from './home/SupplyInventory-home.component';
import { SupplyInventoryNewComponent } from './new/SupplyInventory-new.component';
import { SupplyInventoryDetailComponent } from './detail/SupplyInventory-detail.component';

const routes: Routes = [
  {path: '', component: SupplyInventoryHomeComponent},
  { path: 'new', component: SupplyInventoryNewComponent },
  { path: ':id', component: SupplyInventoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SupplyInventory-detail-permissions'
      }
    }
  }
];

export const SUPPLYINVENTORY_MODULE_DECLARATIONS = [
    SupplyInventoryHomeComponent,
    SupplyInventoryNewComponent,
    SupplyInventoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyInventoryRoutingModule { }