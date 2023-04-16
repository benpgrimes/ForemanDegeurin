import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.FirmModule),
    data: {animation: 'OverviewPage'},
  },
  {
    path: 'attorneys',
    loadChildren: () => import('./attorneys/attorneys.module').then(m => m.AttorneysModule),
    data: {animation: 'AttorneysPage'},
  },
  { 
    path: 'legacy',
    loadChildren: () => import('./legacy/legacy.module').then(m => m.LegacyModule),
    data: { animation:'LegacyPage' },
  },
  { 
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { animation:'ContactPage' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
