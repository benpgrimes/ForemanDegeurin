import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'firm',
    loadChildren: () => import('./firm/firm.module').then(m => m.FirmModule),
  },
  {
    path: 'attorneys',
    loadChildren: () => import('./attorneys/attorneys.module').then(m => m.AttorneysModule),
  },
  { 
    path: 'legacy',
    loadChildren: () => import('./legacy/legacy.module').then(m => m.LegacyModule),
  },
  { 
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
