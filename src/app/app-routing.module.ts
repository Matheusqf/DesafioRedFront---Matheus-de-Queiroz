import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { IdaEVoltaComponent }   from './pages/ida-e-volta/ida-e-volta.component';
import { SoDeIdaComponent }      from './pages/so-de-ida/so-de-ida.component';
import { VariasCidadesComponent }  from './pages/varias-cidades/varias-cidades.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/idaEVolta', pathMatch: 'full' },
  { path: 'idaEVolta',  component: IdaEVoltaComponent },
  { path: 'soDeIda', component: SoDeIdaComponent },
  { path: 'variasCidades',     component: VariasCidadesComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}