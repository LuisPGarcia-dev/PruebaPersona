import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaService } from './services/tabla-service/tabla.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TablaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [TablaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
