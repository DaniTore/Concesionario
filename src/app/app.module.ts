import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarDetailLineComponent } from './car-detail/car-detail-line/car-detail-line.component';
import { CarFormComponent } from './car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarDetailLineComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
