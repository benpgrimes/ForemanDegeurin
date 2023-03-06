import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

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
        style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave *', [
            style({}),
            animate(1, style({}))
        ])
    ]),
]

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
        style({ left: '100%' })
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
        animate('300ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave *', [
            style({}),
            animate(1, style({}))
        ])
    ]),
]

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => FirmPage', transitionLeft),
    transition('* => ContactPage', transitionRight),
    transition('FirmPage => *', transitionRight),
    transition('ContactPage => *', transitionLeft),
    transition('AttorneysPage => LegacyPage', transitionRight),
    transition('LegacyPage => AttorneysPage', transitionLeft),
  ]);

