import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {
    path: '',
    title: 'Law Offices of Foreman DeGeurin & DeGeurin',
    component: OverviewComponent
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class FirmModule { }