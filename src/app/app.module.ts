import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider'

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { LegacyComponent } from './legacy/legacy.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'; 
import { GoogleMapComponent } from './google-map/google-map.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AttorneysComponent,
    LegacyComponent,
    ContactComponent,
    GoogleMapComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({loader: {
      provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
