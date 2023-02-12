import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirmComponent } from './firm/firm.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { LegacyComponent } from './legacy/legacy.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    FirmComponent,
    AttorneysComponent,
    LegacyComponent,
    ContactComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
