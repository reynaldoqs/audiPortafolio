import { trigger, transition, query, style, animate, group, keyframes, animateChild, stagger } from '@angular/animations';

export const galleryChild = trigger('gallerySectionAnimation', [
    transition(':enter', [
        query('section', style({ opacity: 0}), {optional: true}),

        query('aud-design-card', stagger('150ms', [
          animate('.5s ease-out', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(25px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
]);
