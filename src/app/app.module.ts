import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainScreenModule } from './pages/main-screen/main-screen.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { IdaEVoltaComponent } from './pages/ida-e-volta/ida-e-volta.component';
import { SoDeIdaComponent } from './pages/so-de-ida/so-de-ida.component';
import { VariasCidadesComponent } from './pages/varias-cidades/varias-cidades.component';

@NgModule({
  declarations: [
    AppComponent,
    IdaEVoltaComponent,
    SoDeIdaComponent,
    VariasCidadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainScreenModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
