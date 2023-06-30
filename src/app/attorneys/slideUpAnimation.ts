import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const transitionUp = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transform: 'translateY(0)'
    })
  ]),
  query(':enter', [
    style({ transform: 'translateY(5%)', opacity: 0 })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('0ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ]),
    query(':enter', [
      animate('400ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }))
    ]),
  ]),
];

export const slideUpAnimation =
  trigger('attorneyRouteAnimations', [
    transition('AttorneysListPage <=> AttorneyPage', transitionUp),
  ]);