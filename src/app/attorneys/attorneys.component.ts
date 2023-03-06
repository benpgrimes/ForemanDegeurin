import { Component, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { slideUpAnimation } from './slideUpAnimation';

@Component({
  selector: 'attorneys-component',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.scss'],
  animations: [slideUpAnimation],
})
export class AttorneysComponent { 

  constructor(private readonly contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation'];
  }
}
