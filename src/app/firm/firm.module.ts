import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirmComponent } from "./firm.component";

const routes: Routes = [
    {
      path: '',
      title: 'Firm Overview',
      component: FirmComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FirmModule { }