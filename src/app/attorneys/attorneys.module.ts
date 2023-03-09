import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AttorneyProfilePictureComponent } from "./attorneys-list/attorney-profile-picture/attorney-profile-picture.component";
import { AttorneyComponent } from "./attorney/attorney.component";
import { AttorneysListComponent } from "./attorneys-list/attorneys-list.component";
import { AttorneysComponent } from "./attorneys.component";
import { slideUpAnimation } from "./slideUpAnimation";

const routes: Routes = [
  { 
    path: '',
    title: 'Attorneys',
    component: AttorneysComponent,

    children: [
      {
        path: '',
        component: AttorneysListComponent,
        pathMatch: 'full',
        data: { animation:'AttorneysListPage' },
      },
      {
        path: ':attorneyName',
        title: 'Attorneys',
        component: AttorneyComponent,
        data: { animation:'AttorneyPage' },
      },
    ]
  }
];

  @NgModule({
    declarations: [AttorneysListComponent, AttorneyComponent, AttorneyProfilePictureComponent],
    imports: [RouterModule.forChild(routes), MatCardModule, CommonModule],
    exports: [RouterModule],
  })
  export class AttorneysModule { }