import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateY(-200%)' }),
        animate('2s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('1s ease-in-out', style({ transform: 'translateY(300%)' }))
      ], { optional: true }),
    ])
  ])
])
