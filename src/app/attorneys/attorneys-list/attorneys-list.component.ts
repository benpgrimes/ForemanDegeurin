import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { slideUpAnimation } from '../slideUpAnimation';

@Component({
  selector: 'attorneys-list-component',
  templateUrl: './attorneys-list.component.html',
  styleUrls: ['./attorneys-list.component.scss'],
  animations: [slideUpAnimation],
})
export class AttorneysListComponent { 
  constructor(private readonly router: Router) { }

  navigateToAttorneyPage(name: string) {
    this.router.navigateByUrl(`attorneys/${name}`);
  }
}
