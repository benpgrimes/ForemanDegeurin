import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttorneysComponent } from "./attorneys.component";

const routes: Routes = [
    {
      path: '',
      title: 'Attorneys',
      component: AttorneysComponent,
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AttorneysModule { }