import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { GreenCompComponent } from './green-comp/green-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubServerComponent,
    GreenCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
