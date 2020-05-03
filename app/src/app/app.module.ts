import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CivilizationsComponent } from './civilizations/civilizations.component';
import { UnitsComponent } from './units/units.component';
import { StructuresComponent } from './structures/structures.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    CivilizationsComponent,
    UnitsComponent,
    StructuresComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
