import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DxSchedulerModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { Service } from './app.service';
import { BootStrapComponent } from './boot-strap/boot-strap.component';


@NgModule({
  declarations: [
    AppComponent,
    BootStrapComponent
  ],
  imports: [
    BrowserModule,
    DxSchedulerModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
