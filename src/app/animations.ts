import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const transitionLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('400ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ]),
    query(':enter', [
      animate('400ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ]),
    query(':leave *', [
      style({}),
      animate(1, style({}))
    ])
  ]),
];

const transitionRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('400ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ]),
    query(':enter', [
      animate('400ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ]),
    query(':leave *', [
      style({}),
      animate(1, style({}))
    ])
  ]),
];

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => OverviewPage', transitionLeft),
    transition('* => ContactPage', transitionRight),
    transition('OverviewPage => *', transitionRight),
    transition('ContactPage => *', transitionLeft),
    transition('AttorneysPage => LegacyPage', transitionRight),
    transition('LegacyPage => AttorneysPage', transitionLeft),
  ]);

