import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AttorneysViewModel } from '../attorneys-view-model';
import { slideUpAnimation } from '../slideUpAnimation';

@Component({
  selector: 'attorneys-list-component',
  templateUrl: './attorneys-list.component.html',
  styleUrls: ['./attorneys-list.component.scss'],
  animations: [slideUpAnimation],
})
export class AttorneysListComponent { 
  AttorneysViewModel = AttorneysViewModel;
}
