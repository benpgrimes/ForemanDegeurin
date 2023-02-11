import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttorneysComponent } from './attorneys/attorneys.component';
import { ContactComponent } from './contact/contact.component';
import { FirmComponent } from './firm/firm.component';
import { LegacyComponent } from './legacy/legacy.component';

const routes: Routes = [
  {
    path: 'firm', component: FirmComponent
  },
  {
    path: 'attorneys', component: AttorneysComponent
  },
  { 
    path: 'legacy', component: LegacyComponent
  },
  { 
    path: 'contact', component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
