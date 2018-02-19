import { Component, OnInit } from '@angular/core';
import { galleryChild } from '../../../animations/child.animations';

@Component({
  selector: 'aud-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.css'],
  animations: [galleryChild],
})
export class DevelopComponent implements OnInit {
  designs = [
    {
      title: 'fuegos',
      type: 'Diseño de imagen'
    },
    {
      title: 'paisaje',
      type: 'Diseño de imagen'
    },
    {
      title: 'audi',
      type: 'Diseño de imagen'
    },
    {
      title: 'pizza',
      type: 'Diseño de imagen'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
