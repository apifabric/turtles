import { MenuRootItem } from 'ontimize-web-ngx';

import { AdoptionApplicationCardComponent } from './AdoptionApplication-card/AdoptionApplication-card.component';

import { FeedingScheduleCardComponent } from './FeedingSchedule-card/FeedingSchedule-card.component';

import { HabitatCardComponent } from './Habitat-card/Habitat-card.component';

import { HealthCheckCardComponent } from './HealthCheck-card/HealthCheck-card.component';

import { PondCardComponent } from './Pond-card/Pond-card.component';

import { ResearchProjectCardComponent } from './ResearchProject-card/ResearchProject-card.component';

import { StaffCardComponent } from './Staff-card/Staff-card.component';

import { SupplyInventoryCardComponent } from './SupplyInventory-card/SupplyInventory-card.component';

import { TurtleCardComponent } from './Turtle-card/Turtle-card.component';

import { TurtleCareLogCardComponent } from './TurtleCareLog-card/TurtleCareLog-card.component';

import { VisitorCardComponent } from './Visitor-card/Visitor-card.component';

import { VolunteerCardComponent } from './Volunteer-card/Volunteer-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'AdoptionApplication', name: 'ADOPTIONAPPLICATION', icon: 'view_list', route: '/main/AdoptionApplication' }
    
        ,{ id: 'FeedingSchedule', name: 'FEEDINGSCHEDULE', icon: 'view_list', route: '/main/FeedingSchedule' }
    
        ,{ id: 'Habitat', name: 'HABITAT', icon: 'view_list', route: '/main/Habitat' }
    
        ,{ id: 'HealthCheck', name: 'HEALTHCHECK', icon: 'view_list', route: '/main/HealthCheck' }
    
        ,{ id: 'Pond', name: 'POND', icon: 'view_list', route: '/main/Pond' }
    
        ,{ id: 'ResearchProject', name: 'RESEARCHPROJECT', icon: 'view_list', route: '/main/ResearchProject' }
    
        ,{ id: 'Staff', name: 'STAFF', icon: 'view_list', route: '/main/Staff' }
    
        ,{ id: 'SupplyInventory', name: 'SUPPLYINVENTORY', icon: 'view_list', route: '/main/SupplyInventory' }
    
        ,{ id: 'Turtle', name: 'TURTLE', icon: 'view_list', route: '/main/Turtle' }
    
        ,{ id: 'TurtleCareLog', name: 'TURTLECARELOG', icon: 'view_list', route: '/main/TurtleCareLog' }
    
        ,{ id: 'Visitor', name: 'VISITOR', icon: 'view_list', route: '/main/Visitor' }
    
        ,{ id: 'Volunteer', name: 'VOLUNTEER', icon: 'view_list', route: '/main/Volunteer' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AdoptionApplicationCardComponent

    ,FeedingScheduleCardComponent

    ,HabitatCardComponent

    ,HealthCheckCardComponent

    ,PondCardComponent

    ,ResearchProjectCardComponent

    ,StaffCardComponent

    ,SupplyInventoryCardComponent

    ,TurtleCardComponent

    ,TurtleCareLogCardComponent

    ,VisitorCardComponent

    ,VolunteerCardComponent

];