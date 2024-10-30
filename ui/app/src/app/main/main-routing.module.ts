import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'AdoptionApplication', loadChildren: () => import('./AdoptionApplication/AdoptionApplication.module').then(m => m.AdoptionApplicationModule) },
    
        { path: 'FeedingSchedule', loadChildren: () => import('./FeedingSchedule/FeedingSchedule.module').then(m => m.FeedingScheduleModule) },
    
        { path: 'Habitat', loadChildren: () => import('./Habitat/Habitat.module').then(m => m.HabitatModule) },
    
        { path: 'HealthCheck', loadChildren: () => import('./HealthCheck/HealthCheck.module').then(m => m.HealthCheckModule) },
    
        { path: 'Pond', loadChildren: () => import('./Pond/Pond.module').then(m => m.PondModule) },
    
        { path: 'ResearchProject', loadChildren: () => import('./ResearchProject/ResearchProject.module').then(m => m.ResearchProjectModule) },
    
        { path: 'Staff', loadChildren: () => import('./Staff/Staff.module').then(m => m.StaffModule) },
    
        { path: 'SupplyInventory', loadChildren: () => import('./SupplyInventory/SupplyInventory.module').then(m => m.SupplyInventoryModule) },
    
        { path: 'Turtle', loadChildren: () => import('./Turtle/Turtle.module').then(m => m.TurtleModule) },
    
        { path: 'TurtleCareLog', loadChildren: () => import('./TurtleCareLog/TurtleCareLog.module').then(m => m.TurtleCareLogModule) },
    
        { path: 'Visitor', loadChildren: () => import('./Visitor/Visitor.module').then(m => m.VisitorModule) },
    
        { path: 'Volunteer', loadChildren: () => import('./Volunteer/Volunteer.module').then(m => m.VolunteerModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }