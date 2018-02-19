import { Component, OnInit } from '@angular/core';
import { informationTransitions, galleryTransitions } from '../animations/router.animations';

@Component({
  selector: 'aud-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [ informationTransitions, galleryTransitions]
})
export class PagesComponent implements OnInit {

  DevSkills = {
    tipo: 'desarrollo',
    skills: [
      'Angular 5', 'Vue JS', 'Node JS', 'Html5, css3, JavaScript', 'Ionic 3'
    ]
  };
  DsgSkills = {
    tipo: 'diseno',
    skills: [
      'WordPress', 'Bootstrap 4', 'Photoshop CC 2017', 'Illustrator CC 2017', 'InDesign CC 2017'
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  routeState(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
