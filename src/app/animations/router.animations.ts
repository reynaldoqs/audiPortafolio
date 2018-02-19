import { trigger, transition, query, style, animate, group, sequence, animateChild } from '@angular/animations';

export const informationTransitions = trigger('informationAnimation', [
    transition('* <=> *', [

        group([

            query(':enter', [

                style({ transform: 'translateX(100%) scale(.5)', opacity: 0 }),
                animate('.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))

            ], { optional: true }),
            query(':leave', [

                style({ transform: 'translateX(0%) translateY(-100%)' }),
                animate('.5s ease-in-out', style({ transform: 'translateX(-100%) translateY(-100%) scale(.5)', opacity: 0, zIndex: 0 }))

            ], { optional: true })

        ])

    ])
]);

export const galleryTransitions = trigger('galleryAnimation', [
    transition('* => *', [
      query(':enter, :leave', style({position: 'fixed', width: '100%', height: 'calc(40vh - 40px)'}), {optional: true}),
      sequence([
          group([
            query(':leave', [
              animate('.4s ease-in-out', style({transform: 'translateY(100%)', opacity: 0})),
            ], {optional: true}),

            query(':enter', [
              style({transform: 'rotateX(180deg)', opacity: 0}),
              animate('.4s ease-in-out', style('*')),
            ], {optional: true})
          ]),
          query('@gallerySectionAnimation', animateChild(), {optional: true})
        ])
      ])
]);
