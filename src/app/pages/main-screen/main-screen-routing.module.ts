import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { MainScreenComponent } from './main-screen.component';

const mainRoutes: Routes = [
    {

        path: 'mainscreen',
        component: MainScreenComponent,

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class MainScreenRoutingModule {}